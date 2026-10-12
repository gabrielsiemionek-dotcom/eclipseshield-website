// Page-level helpers shared by the layout and components.

// The fixed mobile quote bar is hidden on the quote page itself.
export const showMobileCta = (pathname: string) => !pathname.startsWith('/quote/');
