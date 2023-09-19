import type {Subscription} from '@/synced-external-store/types';

export abstract class SyncedExternalStore<T> {
  protected abstract snapshot: T;
  protected isEqual: (a: T, b: T) => boolean = (a, b) => {
    return a === b;
  };

  private readonly subscribers = new Set<Subscription<T>>();

  // Get the current snapshot.
  getSnapshot() {
    return this.snapshot;
  }

  // Subscribe to the sync storage.
  subscribe(callback: () => void) {
    this.subscribers.add(callback);
  }

  // Unsubscribe from the sync storage.
  unsubscribe(callback: () => void) {
    this.subscribers.delete(callback);
  }

  // Publish updates to subscribers.
  publish() {
    if (this.update()) {
      this.subscribers.forEach((subscriber) => {
        subscriber(this.snapshot);
      });
    }
  }

  // Update the snapshot and return a boolean indicating if the snapshot has changed.
  private update() {
    const newSnapshot = this.makeSnapshot();
    const canBeUpdate = !this.isEqual(this.snapshot, newSnapshot);

    if (canBeUpdate) {
      this.snapshot = newSnapshot;
    }

    return canBeUpdate;
  }

  // Abstract method to make a snapshot of type T.
  protected abstract makeSnapshot(): T;
}
