/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../Button/Button';
import classes from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

function Search({ hasError, onSubmit }: SearchProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.search}>
        <label htmlFor="search" className={classes.label}>
            <img src='/icon-search.svg' alt="search icon" />
        </label>
        <input
          id="search"
          className={classes.textField}
          type="text"
          name="username"
          placeholder="Search GitHub username…"
        />
        {hasError && <div className={classes.error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Search;
