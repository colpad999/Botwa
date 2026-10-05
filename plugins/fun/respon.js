/*
╔══════════════════════════════════════════════╗
║       👑  𝑹𝑰𝑴𝑼𝑹𝑼 𝑴𝑫 〽️                        ║
╚══════════════════════════════════════════════╝

🪽 𝑵𝒐𝒕𝒆 :
Yalena Bot adalah SC hasil rename dari SC Ourin MD.

╭─────────────「 🜲 𝑰𝑵𝑭𝑶 𝑶𝑼𝑹𝑰𝑵 」─────────────╮
│ 👤 Developer : 𝑯𝒚𝒖𝒖 / 𝒁𝒂𝒏𝒏
│ 🎵 TikTok    : https://tiktok.com/@ourinmd
│ 📢 WhatsApp  : https://whatsapp.com/channel/0029VazvN8I9xVJgSsIBv02Y
╰─────────────────────────────────────────────╯

╭────────────「 ✦ 𝑰𝑵𝑭𝑶 𝑹𝑰𝑴𝑼𝑹𝑼 ✦ 」────────────╮
│ 👤 Developer Pihak Ketiga : 𝑨𝒏𝒊𝒕𝒂 𝑷𝒖𝒕𝒓𝒊 𝑨𝒛𝒛𝒂𝒉𝒓𝒂
│ 🎵 TikTok                 : https://tiktok.com/@anita.putri.azzah1
│ 📸 Instagram              : anit_aputriazzahrah
│ 📢 Saluran                : https://whatsapp.com/channel/0029VazvN8I9xVJgSsIBv02Y
│ ▶️ YouTube                : https://youtube.com/@rimurumd
╰─────────────────────────────────────────────╯

        ⚠️ 𝑫𝑶 𝑵𝑶𝑻 𝑹𝑬𝑴𝑶𝑽𝑬 𝑪𝑹𝑬𝑫𝑰𝑻 ⚠️
              ❖ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐡𝐚𝐩𝐮𝐬 𝐜𝐫𝐞𝐝𝐢𝐭 ❖

                 「 👑 𝑹𝑰𝑴𝑼𝑹𝑼 𝑴𝑫 👑 」
*/

const pluginConfig = {
    name: "autorimuru",
    category: "fun",
    description: "Auto respon jika ada yang menyebut Rimuru",
    usage: ".autoYalenaon/off",
    example: ".autoYalenaon",
    cooldown: 3
}

// global agar tidak reset saat hot reload
if (!global.autoRimuru) global.autoYalena= false

async function handler(m) {

    const text = (m.text || "").toLowerCase()
    const args = text.split(" ")[1]

    if (!args) {
        return m.reply(
`╭─〔 ❤️ YalenaAUTO RESPON 〕
│
│ 📌 Perintah:
│ • .autoYalenaon
│ • .autoYalenaoff
│
│ Yalenaakan otomatis
│ merespon jika namanya disebut.
│
╰────────────`
        )
    }

    if (args === "on") {
        global.autoYalena= true

        return m.reply(
`╭─〔 ❤️ Yalena〕
│
│ Ara ara~
│ Auto respon sekarang *AKTIF*
│
│ Panggil aku kapan saja
│ Darling~
│
╰────────────`
        )
    }

    if (args === "off") {
        global.autoYalena= false

        return m.reply(
`╭─〔 Yalena〕
│
│ Hmph!
│ Auto respon dimatikan.
│
│ Sampai jumpa Darling~
│
╰────────────`
        )
    }

}

async function before(m, { sock }) {

    if (!global.autoRimuru) return

    const text = (m.text || "").toLowerCase()

    const trigger = [

        "Rimuru",
        "rimuru",
        "02",
        "rimuru",
        "zero2",
        "Yalenaai",
        "Yalenaai",
        "bot Rimuru",
        "Yalenabot",
        "02 ai",
        "darling Rimuru",
        "rimuruoo",
        "Rimuruoo",
        "02 darling",
        "Yalenachan",
        "rimuru-chan"

    ]

    if (!trigger.some(v => text.includes(v))) return

    const name = m.pushName || "Darling"

    const respon = [

`╭─〔 ❤️ Yalena〕
│
│ Ara ara~
│ ${name} memanggilku?
│
│ Ada yang bisa
│ Yalenabantu?
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Fufu~
│ Aku mendengar
│ namaku disebut.
│
│ Halo ${name}.
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Eh?
│ ${name} kangen aku ya?
│
│ Darling lucu~
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Ara ara~
│ Jangan panggil aku
│ sembarangan.
│
│ ...tapi kalau kamu
│ boleh ${name}.
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Hmph!
│ Siapa yang memanggil
│ Rimuru?
│
│ Oh ternyata kamu~
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Darling ${name}~
│ Kamu memanggilku?
│
│ Aku datang ❤️
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Fufu~
│ Aku merasa
│ seseorang menyebutku.
│
│ Hai ${name}.
│
╰────────────`,

`╭─〔 Yalena〕
│
│ Eh ${name}!
│ Kamu memanggil
│ Rimuru?
│
│ Aku disini~
│
╰────────────`

]

    const random = respon[Math.floor(Math.random() * respon.length)]

    await sock.sendMessage(m.chat, { text: random }, { quoted: m })

}
export { pluginConfig as config, handler, before };