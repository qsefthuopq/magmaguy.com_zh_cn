function getStringList(id) {
    var stringList = id + ":\n";
    let checkSum = id + ":\n";
    Array.from(document.getElementsByClassName(id)).forEach((element) => {
        if (element.value !== "")
            stringList += "- \"" + element.value + "\"\n";
    });
    if (stringList === checkSum)
        return "";
    else
        return stringList;
}

function getString(id) {
    if (document.getElementById(id).value === "")
        return "";
    return id + ": \"" + getValue(id) + "\"\n";
}

function getValue(element) {
    return document.getElementById(element).value;
}