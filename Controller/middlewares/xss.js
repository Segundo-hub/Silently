module.exports.sanitize = (text) => {
    let finalText = ""
    finalText = text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\//, '&#47;')
    return finalText
}