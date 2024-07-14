const words = new URLSearchParams(window.location.search);

const cleanAndCap = (str) => {
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

const object = words.get('object1');
const person = cleanAndCap(words.get('person1'));
const place = cleanAndCap(words.get('place1'));
const speed = words.get('speed');
const adjective = words.get('adjective1');
const move = words.get('move');

const story = `<p>Today it is Samira's birthday! She really wants a <span class="word" title="id: object1">${object}</span> for her birthday, but her parents would not give it to her. Then a <span class="word" title="id: person1">${person}</span> came to her <span class="word" title="id: place1">${place}</span>, and said she would give her a <span class="word" title="id: object1">${object}</span>. Then the <span class="word" title="id: person1">${person}</span> took them to a tower at  <span class="word" title="id: speed">${speed}</span> speeds. When they got to the tower, Samira was shocked. It was so <span class="word" title="id: adjective1">${adjective}</span>! Then the <span class="word" title="id: person1">${person}</span> told her that she could get a <span class="word" title="id: object1">${object}</span> here. She <span class="word" title="id: move">${move}</span> to it and saw it. When she touched it, she went back to her <span class="word" title="id: place1">${place}</span>, with the <span class="word" title="id: object1">${object}</span> in her hands. She was so excited, and showed her parents. They were suprised, but they let her have it. She was so happy, and had a really fun birthday party with all her friends. She never forgot the <span class="word" title="id: person1">${person}</span> again. </p>`


storyEl = document.getElementById('story');
storyEl.innerHTML = story;