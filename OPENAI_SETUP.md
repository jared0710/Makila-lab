# Configurar el asistente de OpenAI de MAKILA LAB

Esta rama agrega la primera versión del chat **Diseña con IA** para playeras y una función de servidor Netlify. La función no funciona hasta configurar la API key y desplegar esta rama.

## 1. Configura la clave de forma segura

En Netlify, abre el sitio que publica MAKILA LAB y busca **Site configuration / Environment variables** (el nombre del menú puede variar). Agrega:

- `OPENAI_API_KEY`: tu clave secreta de OpenAI Platform.
- `OPENAI_MODEL`: opcional; por defecto se usa `gpt-4.1-mini`.
- `SITE_URL`: opcional; el origen exacto del sitio publicado, por ejemplo `https://tu-sitio.netlify.app`.

Nunca pongas la clave en `index.html`, en GitHub, ni en el chat público. No compartas la clave con nadie. Configura también límites de gasto/uso en OpenAI Platform y protección contra abuso antes de ofrecer la función al público.

## 2. Despliega la función

La función está en `netlify/functions/design-assistant.mjs`. Netlify la publica en:

`/.netlify/functions/design-assistant`

El frontend llama esa ruta en el mismo sitio. La API key solo se lee en el servidor desde una variable de entorno.

## 3. Prueba

1. Despliega esta rama en una vista previa de Netlify, no sustituyas todavía el sitio principal.
2. En la sección de diseño, selecciona **Playeras**.
3. Escribe: “Quiero una playera negra oversize con el texto MAKILA en el centro del pecho”.
4. Comprueba que la respuesta aparezca en el chat y que se actualicen color, corte, texto y ubicación en la vista previa.
5. Comprueba que la app siga funcionando si la variable de entorno no está configurada; el chat debe mostrar un mensaje de error sin exponer la clave.

## Alcance de esta primera versión

La IA puede cambiar color, corte, texto del estampado y ubicación del estampado. No genera todavía una imagen nueva ni coloca un archivo de logo cargado mediante el chat. Los controles manuales existentes siguen disponibles. No se ha confirmado todavía el despliegue ni una prueba real con una clave de API.
