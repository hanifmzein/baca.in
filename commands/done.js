const students = require("../data/students.json");
const {
    classCode,
    classSemester,
    classCategory,
} = require("../config/settings.json");
const setoran = students.map((el) => el.username);

module.exports = {
    name: "done",
    syntax: "done",
    description: "Lihat daftar mahasiswa",
    async execute(bot, message, args) {
        try {
            if (args)
            let listmhsText = `*Setoran sampai Hari ini*\n\n`;

            for (let index in setoran) {
                listmhsText += `${parseInt(index) + 1}. ${
                    studentsName[index]
                }\n`;
            }

            bot.sendText(message.from, listmhsText);
        } catch (error) {
            console.log(error.message);
        }
    },
};
