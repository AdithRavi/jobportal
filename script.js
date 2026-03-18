:root {
    --primary: #ff3f6c;
    --dark: #282c3f;
    --text-main: #3e4152;
    --text-muted: #94969f;
    --bg: #f5f5f6;
    --white: #ffffff;
}

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: var(--bg);
    color: var(--text-main);
    line-height: 1.6;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.logo { font-weight: 800; font-size: 1.4rem; color: var(--dark); letter-spacing: -1px; }
.logo span { color: var(--primary); }

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 600;
    margin-left: 2rem;
    font-size: 0.9rem;
    text-transform: uppercase;
}

/* Hero Section */
.hero {
    background: var(--white);
    text-align: center;
    padding: 5rem 1rem;
}

.hero h1 { font-size: 3rem; margin: 0; color: var(--dark); }
.hero p { color: var(--text-muted); font-size: 1.1rem; }

/* Search Box */
.search-box {
    display: flex;
    max-width: 600px;
    margin: 2.5rem auto 0;
    background: var(--white);
    border: 1px solid #d4d5d9;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s;
}

.search-box:focus-within { box-shadow: 0 8px 20px rgba(0,0,0,0.1); }

#jobSearch {
    flex: 1;
    border: none;
    padding: 18px 25px;
    font-size: 1rem;
    outline: none;
}

#searchBtn {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 0 40px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
}

#searchBtn:hover { opacity: 0.9; }

/* Job Grid */
.container { padding: 3rem 5%; }
.job-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
}

/* Job Cards */
.job-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #eaeaec;
    transition: all 0.3s ease;
    position: relative;
}

.job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

.dept-tag {
    background: #f0f0f0;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-muted);
}

.job-card h3 { margin: 15px 0 10px; font-size: 1.25rem; color: var(--dark); }
.job-info { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; }

.apply-btn {
    display: block;
    text-align: center;
    padding: 12px;
    border: 1px solid var(--primary);
    color: var(--primary);
    text-decoration: none;
    font-weight: 700;
    border-radius: 4px;
    transition: all 0.2s;
}

.apply-btn:hover { background: var(--primary); color: var(--white); }
