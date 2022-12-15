const co2MailWithoutFiles = 4
const co2MailWithFiles = 11

let numberOfEmails = 4

function totalCo2(numberOfEmails) {
    return numberOfEmails * co2MailWithoutFiles
}

const weight = totalCo2(numberOfEmails)
console.log(weight,"g")