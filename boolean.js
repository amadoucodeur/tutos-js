// false, undefined, null, 0, "" => sont false en Boolean
if (false || undefined || null || 0 || "" || NaN) {
  console.log("first");
}
