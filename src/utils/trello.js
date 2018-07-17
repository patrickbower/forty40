let key = `bb6807f13b020310a0543a81ebf10765`;
let token = window.localStorage.trello_token;

export let boardName = 'Forty40';

export let base = {
  domain: `https://api.trello.com/1/`,
  parameters: `?key=${key}&token=${token}`
}

export function member() {
  return `members/patrickbower`;
}

export function boards() {
  return `members/me/boards`;
}

export function cards(id) {
  return `boards/${id}/cards`;
}

export function query(action){
  return `${base.domain}${action}${base.parameters}`;
}