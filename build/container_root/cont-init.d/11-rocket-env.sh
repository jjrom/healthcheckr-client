#!/usr/bin/with-contenv bash

if [[ $ROCKET_ENVJS_BASE64 ]]
then
  echo "[rocket] Overwrite /app/env.js from input ROCKET_ENVJS_BASE64"
  echo $ROCKET_ENVJS_BASE64 | base64 --decode > /app/env.js
fi

# Variable substitution
if [[ -f "/app/app/env.js" ]]
then
  envsubst < /app/app/env.js > /tmp/env.js && mv /tmp/env.js /app/app/env.js
fi
if [[ -f "/app/env.js" ]]
then
  envsubst < /app/env.js > /tmp/env.js && mv /tmp/env.js /app/env.js
fi
