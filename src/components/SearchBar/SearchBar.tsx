/*
Created by: Jackie Sanchez
Date: 3/11/2026
Description: This file defines the SearchBar component, which provides a search input for users to search for games. 
             It takes an onSearch prop, which is a function that will be called with the search query when the form is submitted.
*/
import styles from "./SearchBar.module.css";

type Props = {
    onSearch: (query: string) => void;
    className?: string;
}

export default function SearchBar({ onSearch, className }: Props) {
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("search") as string;
        onSearch(query);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                name="search"
                type="text"
                className={className}
                placeholder="Search for games..."
            />
            <button className={styles.searchButton} type="submit">Search</button>
        </form>
    )
}
