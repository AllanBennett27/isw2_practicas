# Cómo entregar la práctica 6

## Archivos

- Coloque `arquitectura.md` dentro de `practica-6` en su repositorio de prácticas.
- Agregue el contenido de `README-AGREGAR.md` al `README.md` de la raíz, conservando lo que ya contiene. El archivo de instrucciones no reemplaza el README principal.

## Pasos desde GitHub

1. Abra su repositorio de prácticas y seleccione su rama principal.
2. En el selector de ramas, cree `feature/practica-6` a partir de la rama principal.
3. En esa nueva rama, use **Add file → Upload files** para subir la carpeta `practica-6` descomprimida. No suba únicamente el ZIP. Confirme el cambio con el mensaje `docs: agregar arquitectura C4 de Repremerc`.
4. Sin salir de `feature/practica-6`, edite el `README.md` de la raíz. Agregue el bloque de `README-AGREGAR.md` y confirme con `docs: agregar token y enlace de practica 6`.
5. Si su repositorio todavía no tiene al menos tres commits, agregue una mejora real: por ejemplo, revise y precise las responsabilidades del backend según lo acordado para su proyecto. Guarde ese cambio como un tercer commit. No es necesario si ya cumple el mínimo.
6. Abra un pull request desde `feature/practica-6` hacia la rama principal, con título `Práctica 6: arquitectura C4 de Repremerc`.
7. Revise que aparezcan los dos diagramas en la vista previa de `practica-6/arquitectura.md` y que el README principal contenga el token exacto.
8. Integre el PR con **Create a merge commit** si está disponible, para conservar los commits individuales. Si usa otra opción, compruebe después que el historial final mantiene el número de commits exigido.
9. Pegue la URL del repositorio de prácticas en la plataforma de la clase.

## Comprobaciones antes de entregar

- [ ] Existe la carpeta `practica-6` en la rama principal.
- [ ] `practica-6/arquitectura.md` tiene dos diagramas Mermaid: contexto y contenedores, con sus justificaciones.
- [ ] Hay un PR con estado **Merged** cuya rama de origen es `feature/practica-6`.
- [ ] El `README.md` de la raíz contiene `LEARN-CAP-43765146`.
- [ ] El repositorio tiene al menos tres commits en total y dos en los últimos diez días. La cabecera de la consigna también menciona commits de esta semana; realizar los dos cambios ahora cubre ambos criterios.

La captura menciona que este módulo abre el apartado del proyecto final «Arquitectura: C4 + 2 ADRs en el repo». Los dos ADRs no aparecen como requisito explícito de este entregable de fase 0; revise la consigna del proyecto final para desarrollarlos allí.

Estos archivos preparan el contenido de la práctica. El PR, su integración y las fechas reales de los commits deben completarse y verificarse en GitHub.
