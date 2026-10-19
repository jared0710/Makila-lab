# MAKILA LAB

Plataforma en desarrollo para diseñar prendas, preparar fichas técnicas y conectar marcas emergentes con maquilas.

## Estado actual

La versión actual es un prototipo web de un solo archivo (`index.html`), pensado para pantallas móviles. Incluye:

- Inicio con categorías: playeras, chamarras, pantalones y gorras.
- Formulario de especificaciones de la prenda.
- Borradores guardados en el almacenamiento local del navegador.
- Calculadora manual de costos: el usuario introduce importes reales de material, confección y acabados; la herramienta no inventa precios.
- Cálculo de costo base, precio objetivo con margen y total para la cantidad solicitada.
- Descarga de una ficha de diseño en texto.
- Validación automática básica de sintaxis JavaScript, IDs duplicados y elementos requeridos en cada push.

## Limitaciones importantes

- No es todavía una aplicación de producción ni tiene backend.
- Los borradores quedan guardados únicamente en ese navegador/dispositivo.
- No hay registro/inicio de sesión, sincronización en la nube ni panel privado de administración.
- No hay directorio conectado a maquilas ni envío automático de solicitudes.
- Las cifras calculadas son tan buenas como los costos que capture el usuario; no sustituyen una cotización confirmada por la fábrica.
- El personalizador aún no es un editor visual de patrones ni un modelo 3D de la prenda.
- Las fotografías dependen de un servicio externo.

## Próximas fases recomendadas

1. Probar el prototipo en iPhone y corregir errores de interacción/accesibilidad.
2. Definir un catálogo de telas y costos con datos confirmados por el propietario y las maquilas.
3. Diseñar la ficha técnica descargable con especificaciones claras para producción.
4. Crear backend y base de datos para usuarios, diseños, maquilas y solicitudes.
5. Crear un panel de administración para revisar solicitudes y registrar cotizaciones de proveedores.
6. Añadir autenticación, validación de datos, políticas de privacidad, seguridad y copias de respaldo.
7. Publicar en un alojamiento apropiado para una aplicación comercial y verificar la URL pública.

## Prueba automática

GitHub Actions ejecuta `node scripts/validate-html.mjs` en cada push a `main` y en pull requests. Esta prueba comprueba sintaxis del JavaScript integrado, IDs duplicados y elementos esenciales; no reemplaza una prueba real en navegador.

## Herramientas

La primera versión utiliza HTML, CSS y JavaScript nativos para mantener bajo el costo y evitar dependencias innecesarias. Se recomienda evaluar una base de datos/backend (por ejemplo Supabase) cuando el flujo del prototipo esté validado, sin añadir credenciales secretas al repositorio.
