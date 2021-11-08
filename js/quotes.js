const quotes = [
    {
        quote: "운동은 당신의 몸을 증오하기 때문이 아니라, 사랑하기 때문에 하는 거예요.",
    },
    {
        quote: "아무것도 바꾸지 않으면 변하는 것은 없다.",
    },
    {
        quote: "내 머리는 복근을 쫓으라 말하지만, 내 마음은 도넛에 향한다.",
    },
    {
        quote: "둘 중 어느 것이 더 긴지 모르겠다: 전자레인지 1분인지, 러닝머신에서의 1분인지.",
    },
    {
        quote: "재미로 버피 테스트를 하는 사람은 절대 건드리지 말 것.",
    },
    {
        quote: "근육을 붙이려면 몸을 바삐 움직여야지.",
    },
    {
        quote: "스쿼트를 열심히 하는 자에게 복이 있나니.",
    },
    {
        quote: "당신의 몸에 귀를 기울여라.",
    },
    {
        quote: "다른 사람에게 나의 생활방식에 대해 설명하는 것을 그만두고, 나에게 맞는 데로 살아갈 때 삶이 훨씬 편해진다.",
    },
    {
        quote: "5% 덜 나가기 위해 당신의 삶 95%를 희생하지는 말아라.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;