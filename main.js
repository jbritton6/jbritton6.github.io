descHeader = [
    "Travel to Mecca",
    "Circle the Kaaba",
    "Safa and Marwa",
    "Valley of Mina",
    "Arafat",
    "Animal Sacrifice and Haircut",
    "Pelting the Devil",
];
descText = [
    `The first step is making one's way to Mecca in Saudi Arabia. The Hajj takes place
        in and around Mecca with the accompanying rituals being performed between
        the 8th and 13th day on the last month of the Islamic calendar.`,
    `Here, pilgrimers will walk, or circumambulate, around the Kaaba a total
        of seven times. The Kaaba itself is located in the Great Mosque in Mecca and
        is the direction that all Muslims face when they prey.`,
    `The Sa'i involves pilgrimers walking between two hill tops, called Safa and
        Marwa, a total of 7 times. This is meant to recreate the journey of Hajar and
        the search for water in the desert.`,
    `Next, pilgrimers head towards the valley of Mina where, on his own Hajj, the
        prophet Muhammad rested. Located about 5mi east of Mecca, around 44,000 tents
        are erected for people by the Saudi government.`,
    `Then, pilgrimers head towards Arafat which is about 8mi east of Mecca. Here, 
        Muslims seek forgiveness. It is important that they stay within the boundary of
        Arafat; doing so is necessary for their Hajj to count.`,
    `Towards the end, pilgrimers will cut/shave their hair/head, a physical show of
        their newfound state of being, and return to normal their clothing. 
        Additionally, there is the ritual sacrifice of animals meant to symbolize
        the story of the Angel Gabriel and the ram.`,
    `Here, Muslims engage with a symbolic battle with the Devil by pelting pillars
        with stones. The goal of this is to defy temptation.`,
];
imgPath = [
    "./images/screenshot_1.png",
    "./images/screenshot_2.png",
    "./images/screenshot_3.png",
    "./images/screenshot_4.png",
    "./images/screenshot_5.png",
    "./images/screenshot_6.png",
    "./images/screenshot_7.png",
];
imgDesc = [
    "A man packs for his trip to Mecca (~10:28).",
    "Pilgrimers circumambulating the Kaaba (~23:31).",
    "Pilgrimers rushing between Safa and Marwa (~24:08).",
    "Tents erected at Mina (~31:04).",
    "Pilgrimers at Arafat (~38:12).",
    "A man gets his head shaven (~48:14).",
    "Pilgrimers pelting one of the columns (~48:41).",
];

function toggleOn(icon, iconNum) {
    icon.classList.add("toggle-select");

    document.querySelector(".desc-header").innerHTML = descHeader[iconNum];
    document.querySelector(".desc-text").innerHTML = descText[iconNum];
    document.querySelector(".screenshot-img > img").setAttribute("src", imgPath[iconNum]);
    document.querySelector(".screenshot-txt").innerHTML = imgDesc[iconNum];
}


function toggleOff(icon) {
    icon.classList.remove("toggle-select");

    document.querySelector(".desc-header").innerHTML = "";  
    document.querySelector(".desc-text").innerHTML = "";
    document.querySelector(".screenshot-img > img").setAttribute("src", "");
    document.querySelector(".screenshot-txt").innerHTML = "";
}