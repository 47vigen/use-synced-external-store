import type {SyncedExternalStore} from '@/synced-external-store';

import {useCallback, useMemo, useSyncExternalStore} from 'react';

export function useSyncedExternalStore<
  Snapshot = unknown,
  Storage extends SyncedExternalStore<Snapshot> = SyncedExternalStore<Snapshot>
>(storage: Storage) {
  const getSnapshot = useCallback(() => {
    return storage.getSnapshot();
  }, [storage]);

  const subscribe = useMemo(() => {
    return (callback: () => void) => {
      storage.subscribe(callback);
      return () => {
        storage.unsubscribe(callback);
      };
    };
  }, [storage]);

  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return [snapshot, subscribe] as const;
}
