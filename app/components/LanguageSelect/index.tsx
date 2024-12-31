import type {FC, FormEvent} from 'react';
import {useTranslation} from 'react-i18next';
import {useFetcher, useLocation} from '@remix-run/react';
import {twMerge} from 'tailwind-merge';

const OPTIONS = [
  {label: 'English', value: 'en'},
  {label: '日本語', value: 'ja'},
];

type LanguageSelectProps = {
  className?: string;
  onChange?: () => void;
};

const LanguageSelect: FC<LanguageSelectProps> = ({className, onChange}) => {
  const {
    i18n: {language},
  } = useTranslation();

  const fetcher = useFetcher();
  const location = useLocation();

  const redirectUrl = `${location.pathname}${location.search}${location.hash}`;

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    fetcher.submit(event.currentTarget, {
      action: '/action/set-language',
      method: 'POST',
    });

    onChange?.();
  };

  return (
    <fetcher.Form
      action="/action/set-language"
      className={twMerge('relative flex-none text-sm', className)}
      method="POST"
      onChange={handleChange}
    >
      <input name="redirectUrl" type="hidden" value={redirectUrl} />
      <select
        className="cursor-pointer border-none !bg-transparent bg-none p-0 text-sm !ring-0"
        defaultValue={language}
        name="language"
      >
        {OPTIONS.map(({label, value}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </fetcher.Form>
  );
};

export default LanguageSelect;
