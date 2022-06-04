export const code = {
    emojify: {
        clap: (i) => {
            const x = i.replaceAll(' ', ' 👏 ')
            return x;
        },
        pirateTrumpet: (i) => {
            const x = i.replaceAll(' ', ' 💀🎺 ')
            return x;
        }
    },
    leetify: (i) => {
        const chars = {
            b: '8',
            c: 'C',
            d: 'D',
            e: '3',
            f: 'pH',
            g: '9',
            h: 'H',
            i: '1',
            j: 'J',
            k: 'K',
            l: 'L',
            o: '0',
            q: 'Q',
            r: 'R',
            s: '5',
            t: 'T',
            u: 'V',
            v: 'V',
            A: '4',
            B: '8',
            E: '3',
            F: 'pH',
            G: '9',
            H: 'h',
            I: '1',
            J: 'j',
            K: 'k',
            M: 'm',
            N: 'n',
            O: '0',
            T: '7',
            Z: '2'
        }
        const x = i.replaceAll(/[b,c,d,e,f,g,h,i,j,k,l,o,q,r,s,t,u,v,A,B,E,F,G,H,I,J,K,M,N,O,T,Z]/g, c => chars[c])
        return x;
    },
    mock: (i) => {
        const chars = {
            c: "k",
            C: "K",
            e: "E",
            r: "R",
            t: "T",
            G: "g",
            f: "F",
            a: "A",
            h: "H"
        }
        const x = i.replaceAll(/[c,C,e,r,t,G,f,a,h]/g, c => chars[c]);
        console.warn('Mock is still a work-in-progress.');
        return x;
    },
    emoticonList: [
        ':)',':(',':D',':\'-)',':P',';)',':O','D8',':/',':-J','(y)',':X',':]',':‑)',':-]',':->',':>','8-)','8)',':}',':-}',':o)',':c)',':^)','=]','=)',':‑D','8D','8‑D','=D','=3','B^D','c:','C:','xD','XD','x‑D','X‑D',':‑(',':(',':‑c',':c',':‑<',':<',':‑[',':[',':-||','>:[',':{',':@',':(',';(',':\'‑(',':\'(',':=(',':\'‑)',':\')',':"D','D‑\':','D:<','D:','D8','D;','D=','DX',':‑O',':O',':‑o',':o',':-0','8‑0','>:O','=O','=o','=0'
    ],
    emoticonEmojiList: [
        '🙂','😦','😄','🥲','😛','😉','😮','😱','😕','😏','👍','🤐','🙂','😊','🙂','😀','😀','😊','😊','😀','😀','😁','😁','😊','😊','😊','😃','😄','😄','😄','😍','😄','😄','😄','😆','😆','😂','😂','☹️','☹️','😣','😣','😠','😠','😠','😠','😠','😡','😡','😡','😞','😖','😢','😢','😭','🥲','🥲','😂','😨','😧','😦','😱','😫','😱','😩','😮','😮','😯','😯','😯','😯','😲','😮','😲','😲'
    ],
    emoticonToEmoji: (i) => {
        let x = i;
        for (let c = 0; c < code.emoticonList.length; c++) {
            if (i.includes(code.emoticonList[c])) {
                x = x.replaceAll(code.emoticonList[c], code.emoticonEmojiList[c]);
            }
        }
        console.warn('emoticonToEmoji is still a work-in-progress');
        return x;
    },
    emojiToEmoticon: (i) => {
        let x = i;
        for (let c = 0; c < code.emoticonEmojiList.length; c++) {
            if (i.includes(code.emoticonEmojiList[c])) {
                x = x.replaceAll(code.emoticonEmojiList[c], code.emoticonList[c]);
            }
        }
        console.warn('emojiToEmoticon is still a work-in-progress');
        return x;
    }
}