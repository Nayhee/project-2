const team = ['Nathan Traczewski', 'Wesley Mitchell', 'Punam Ahire']

// Log names of each teammate
for (const teammate of team) {
    console.log(teammate);
}
// Logs each teammates birthday to the console

const logBirthdays = (person, birthday) => {
  console.log(`${person}'s birthday is ${birthday}.`)
}

logBirthdays("Wes", "12/22/1987")
logBirthdays("Nathan", "2/19/1994")
logBirthdays("Punam", "10/21/1983")
