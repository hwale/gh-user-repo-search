const GITHUB_API_URL = "https://api.github.com";

/**
 * 
 * @param {string} user - The GitHub user.
 * @param {number} page - The page number of the results to fetch.
 * @param {number} per_page - Results per page (default 10, max 100).
 * @param {string} sort - Sort by (default - "stars").
 */
const searchUserRepositories = async (user, page, per_page, sort="stars") => {
    const queryString = `q=user:${user}&sort=${sort}&page=${page}&per_page=${per_page}`;
    const api_url = `${GITHUB_API_URL}/search/repositories?${queryString}`;

    const response = await fetch(api_url, {
        method: "GET",
        mode: "cors",
        headers: {
            Accept: "application/vnd.github.mercy-preview+json"
        }
    });

    return response.json();
}

export default { searchUserRepositories };

