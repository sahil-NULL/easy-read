const textElements = document.querySelectorAll('p, span, a')
for(let i=0;i<textElements.length;i++) {
    let text = textElements[i].innerHTML
    let currLen = 0
    for(let j=0;j<text.length;j++) {
        if((text[j] === ' ' || text[j] === '<' || text[j] === '&')&& currLen > 0) {
            const startPos = j - currLen
            const midPos = startPos +  Math.ceil(currLen/2)
            const halfLength = midPos - startPos
            text = text.substr(0, startPos) + "<b>" + text.substr(startPos, halfLength) + "</b>" + text.substr(midPos) 
            currLen = 0
            j += 7
        }
        else {
            currLen++
        }
        if(text[j] === '<') {
            while(text[j] !== '>') {
                j++
            }
            currLen = 0
        }
        else if(text[j] === '&') {
            while(text[j] !== ';') {
                j++
            }
            currLen = 0
        }
    }
    if(currLen > 0) {
        const startPos = text.length - currLen
        const midPos = startPos +  Math.ceil(currLen/2)
        const halfLength = midPos - startPos
        text = text.substr(0, startPos) + "<b>" + text.substr(startPos, halfLength) + "</b>" + text.substr(midPos) 
    }
    textElements[i].innerHTML = text
}