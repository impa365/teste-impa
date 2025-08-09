#!/bin/sh
set -eu

: "${SALES_PAGE_COURSE_NAME:?Variável obrigatória ausente: SALES_PAGE_COURSE_NAME}"
: "${SALES_PAGE_LOGO_URL:?Variável obrigatória ausente: SALES_PAGE_LOGO_URL}"
: "${SALES_PAGE_HERO_IMAGE_URL:?Variável obrigatória ausente: SALES_PAGE_HERO_IMAGE_URL}"
: "${SALES_PAGE_FAVICON_URL:?Variável obrigatória ausente: SALES_PAGE_FAVICON_URL}"

exec node server.js 