function generateDirections() {
    const currentLocation = document.getElementById('currentLocation').value;
    const destination = document.getElementById('destination').value;

    if (!currentLocation || !destination) {
        alert("現在位置と行き先を入力してください。");
        return;
    }

    const giongoList = ["ビャーッ", "グワッ", "シュッ", "サクッ", "ドーン", "ズバッ"];
    const giongoLength = Math.floor(Math.random() * 5) + 3; // ランダムな長さ（3～7個）

    let directions = `${currentLocation}を出発して、`;

    for (let i = 0; i < giongoLength; i++) {
        const randomGiongo = giongoList[Math.floor(Math.random() * giongoList.length)];
        directions += `${randomGiongo}と進んで、`;
    }

    directions += `${destination}に着きますねん！`;

    document.getElementById('directions').textContent = directions;
}
