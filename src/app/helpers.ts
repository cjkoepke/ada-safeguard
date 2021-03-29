export const official = [
    'cardano.org',
    'forum.cardano.org',
    'iohk.io',
    'cardano.ideascale.com',
];

export const triggers = [
    'ada',
    'cardano',
];

export const getRegex = (list: string[]): RegExp => {
    const string = list.join('|');
    return new RegExp(string);
}

export const shouldRun = async (host: string) => {
    let cachedList = null;
    // chrome.storage.sync.get('scamList', ({ list }) => cachedList = list);

    // console.log(cachedList);

    getRegex(triggers).test(host)
};