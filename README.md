# Valeriia MIV - Portfolio Website

This is a React + Material-UI project recreating the portfolio design for
Valeriia MIV.

## Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

## Setup and Running

1.  **Clone or Download:** If you downloaded a ZIP, extract it. If you cloned
    via Git:

    ```bash
    git clone <repository-url>
    cd valeriia-portfolio
    ```

2.  **Install Dependencies:** Open your terminal in the project's root directory
    (`valeriia-portfolio`) and run:

    ```bash
    npm install
    ```

    or if you prefer yarn:

    ```bash
    yarn install
    ```

3.  **Add Images:** Place all your image assets into the `src/assets/` folder.
    Make sure the filenames match those used in the components (e.g.,
    `hero-model.jpg`, `about-me-car.jpg`, etc.). If your filenames are
    different, you'll need to update the import paths in the respective `.jsx`
    files within the `src/sections/` directory.

    **Placeholder images have been created. You MUST replace them with your
    actual images.**

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    This will start the Vite development server, usually at
    `http://localhost:5173/`. Open this URL in your web browser.

## Project Structure

- `public/`: Static assets that are copied directly to the build output.
- `src/`: Contains all the React components, styles, and assets.
  - `assets/`: Image files. **(You need to add your images here)**
  - `sections/`: Individual page section components.
  - `App.jsx`: Main application component that assembles the sections.
  - `main.jsx`: Entry point of the React application.
  - `theme.js`: Material-UI custom theme configuration.
- `index.html`: The main HTML page.
- `package.json`: Project metadata and dependencies.
- `vite.config.js`: Vite build tool configuration.

## Customization

- **Theme:** Modify `src/theme.js` to change colors, fonts, and global MUI
  component styles.
- **Content:** Edit the text and image paths directly within the `.jsx` files in
  `src/sections/`.
- **Styling:** Use the `sx` prop on MUI components for fine-grained styling
  adjustments. Refer to MUI documentation for more details.

## Building for Production

To create an optimized production build:

```bash
npm run build
```
