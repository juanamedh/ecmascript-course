const users = {
    jass: {
        country: 'MX',
        sibilings: {first: 'Kimy',second: 'Damian',third: 'Angel'}
    },
    ana: {
        country: 'US',
    },
}
// Adding the ? symbol after the attribute's name will mean that
// the chained attr is now optional, preventing errors if undefined
console.log(users.jass.sibilings.first);
console.log(users.ana.sibilings?.first);
