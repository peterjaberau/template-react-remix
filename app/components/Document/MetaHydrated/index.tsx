import type {FC} from 'react';
import {useEffect, useState} from 'react';

// For Playwright
// Adds meta tag to document when JavaScript is hydrated
const MetaHydrated: FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated) {
    return <meta content="true" name="hydrated" />;
  }
};

export default MetaHydrated;
