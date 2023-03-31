// REF-10
// prettier-ignore
/* eslint-disable max-len */
function buildIcon(transform: string) {
  return `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" style="transform: ${transform}">
      <g transform="matrix(0.84210527 0 0 0.84210527 0 0)">
        <g transform="matrix(0.027142858 0 0 0.027142858 0 0)">
          <path d="M186.67 193.5L186.67 58.33C 186.67 51.888603 191.8927 46.666 198.334 46.666C 204.7793 46.666 210.002 51.888702 210.002 58.33L210.002 58.33L210.002 193.5L260.08398 143.418C 264.64258 138.8594 272.029 138.8594 276.58398 143.418C 281.14258 147.9727 281.14258 155.359 276.58398 159.918L276.58398 159.918L206.58398 229.918C 202.02928 234.4727 194.64299 234.4727 190.08398 229.918L190.08398 229.918L120.083984 159.918C 115.52928 155.3594 115.52928 147.97299 120.083984 143.418C 124.642586 138.8594 132.02899 138.8594 136.58398 143.418L136.58398 143.418L186.67 193.5zM396.66998 93.33L326.66998 93.33L326.66998 443.33002L396.66998 443.33002zM420.00198 93.33L420.00198 443.33002L490.00198 443.33002L490.00198 93.33002zM151.672 490C 145.2267 490 140.004 484.7773 140.004 478.332L140.004 478.332L140.004 268.332C 140.004 261.8906 145.2267 256.668 151.672 256.668L151.672 256.668L245.004 256.668C 251.4454 256.668 256.672 261.8907 256.672 268.332L256.672 268.332L256.672 478.332C 256.672 484.7773 251.4454 490 245.004 490zM163.336 466.668L233.336 466.668L233.336 279.998L163.336 279.998zM315.00598 466.668C 308.56458 466.668 303.33798 461.4414 303.33798 455L303.33798 455L303.33798 81.67001C 303.33798 75.22472 308.56458 70.002014 315.00598 70.002014L315.00598 70.002014L501.67596 70.002014C 508.11737 70.002014 513.33997 75.22472 513.33997 81.67001L513.33997 81.67001L513.33997 455C 513.33997 461.4414 508.11728 466.668 501.67596 466.668z" stroke="none" fill="#000000" fill-rule="nonzero" />
        </g>
      </g>
    </svg>`;
}

export const INSERT_LEFT_ICON_SVG_STRING = buildIcon('');

export const INSERT_RIGHT_ICON_SVG_STRING = buildIcon('rotate(180deg) scale(1, -1)');

export const INSERT_UP_ICON_SVG_STRING = buildIcon('rotate(90deg) scale(1, -1)');

export const INSERT_DOWN_ICON_SVG_STRING = buildIcon('rotate(-90deg)');

/*
// prettier-ignore
function buildIcon(transformRotate: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="transform: ${transformRotate}" viewBox="0 0 96 96"><switch><g><path d="M12 52h62.344L53.172 73.172a4 4 0 1 0 5.657 5.656l28-28a4 4 0 0 0 0-5.656l-28-28A3.989 3.989 0 0 0 56 16a4 4 0 0 0-2.828 6.828L74.344 44H12a4 4 0 0 0 0 8z"/></g></switch></svg>`;
}

// REF-10
// prettier-ignore
export const ARROW_LEFT_ICON_SVG_STRING = buildIcon('rotate(180deg)');

export const ARROW_RIGHT_ICON_SVG_STRING = buildIcon('');

export const ARROW_UP_ICON_SVG_STRING = buildIcon('rotate(-90deg)');

export const ARROW_DOWN_ICON_SVG_STRING = buildIcon('rotate(90deg)');
*/
