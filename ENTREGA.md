*Micro-tarea:* Función que detecte si un string es un palíndromo

*Pilar 1 — Herramienta:* ¿Cuál eliges?
Claude code. Un agente es lo ideal para esta tarea, y estoy familiarizado con Claude.

*Pilar 2 — Contexto:* ¿Qué información estás aportando? (lenguaje, framework, restricciones, ejemplos…)
Lenguaje, el no uso de frameworks, que sea case insensitive, el reemplazo de tildes, el resultado esperado, los test esperados.

*Pilar 3 — Prompt:* ¿Cómo lo estructuras? (estilo, formato de salida, ejemplos…)
Escribe una función JavaScript llamada `isPalindrome(str)` que:
- Reciba un string
- Ignore mayúsculas, minúsculas, espacios y tildes (á→a, é→e, í→i, ó→o, ú→u, ñ→n)
- Retorne true si es palíndromo, false si no
- Incluya 3 casos de prueba con console.log, uno de ellos con tildes
Sin dependencias externas. Solo Node.js puro.
 
*Resultado:* ¿Funcionó a la primera o tuviste que iterar?
Agregué una iteración extra para validar nulls.

No tengo observaciones sobre open spec por ahora, curioso de como vamos a utilizarlo en general :)