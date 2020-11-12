let myNumber = prompt("De quel nombre veux-tu calculer le factorielle ?")
function factorielle(myNumber) {
  // Si nbr = 0 la factorielle retournera 1
  if (myNumber === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return myNumber * factorielle(myNumber-1);
}
console.log(`Le résultat est : ${factorielle(myNumber)}`)