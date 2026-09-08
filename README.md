# Valen Espitia · Pa’ sentir el Caribe

Landing oficial V2. Fotografías a pantalla completa, galería adaptable al celular, cursor de sol de plátano, música y universo ilustrado.

Sitio: https://alvarezdaniel0613.github.io/valen-espitia/

## Editar y publicar

Requiere Node.js 22.13 o posterior y pnpm.

```sh
pnpm install
pnpm dev
pnpm build
```

GitHub Pages publica `docs/` desde la rama `main`. Después de editar, ejecutar el build y guardar tanto el código como `docs/` en el repositorio.

- `content.ts`: enlaces, playlist y lanzamiento destacado.
- `App.tsx`: textos y secciones.
- `PhotoHero.tsx`: fotografías y encuadres.
- `v2.css` y `globals.css`: diseño.
- `public/`: fotos optimizadas, ilustraciones, textura y cursor. Se incluyen todos los recursos que utiliza la web, sin depender de Drive.

La playlist tiene enlaces a Spotify, YouTube Music y YouTube en `content.ts`. Las fotos usan `srcset` y versiones verticales de 900/1350 px para celulares, y versiones de hasta 3200 px de ancho para escritorio.

Fotografías, ilustraciones y música pertenecen a sus respectivos titulares. La publicación de este repositorio no concede una licencia de reutilización sobre estos materiales.
