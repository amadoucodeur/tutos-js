// false, undefined, null, 0, "" => sont false en nullish
if (false || undefined || null || 0 || "" || NaN) {
  console.log("first");
}

null ?? "c'es un nullish"