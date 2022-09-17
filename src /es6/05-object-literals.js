// Enhanced object literals

function newUser(user, age, country, uid) {
    return {
        user,
        age,
        country,
        id: uid,
    };
};

console.log(newUser('JASStar', 34, 'MX', 1));