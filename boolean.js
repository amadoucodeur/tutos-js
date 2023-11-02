// false, undefined, null, 0, "" => sont false en nullish
if (false || undefined || null || 0 || "" || NaN) {
  console.log("first");
}

" ".charAt?.p
" ".p?.()

null ?? "c'es un nullish"