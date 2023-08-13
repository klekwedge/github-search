/* eslint-disable jsx-a11y/label-has-associated-control */
import UserStore from '../../stores/UserStore';
import Button from '../Button/Button';
import classes from './Search.module.scss';

function Search() {
  const { getGitHubUser } = UserStore;
  // hasError={!user} onSubmit={fetchUser}

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (typeof text === 'string') {
      getGitHubUser(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.search}>
        <label htmlFor="search" className={classes.label}>
          <img src="/icon-search.svg" alt="search icon" />
        </label>
        <input
          id="search"
          className={classes.textField}
          type="text"
          name="username"
          placeholder="Search GitHub username…"
        />
        {/* {hasError && <div className={classes.error}>No results</div>} */}
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Search;
