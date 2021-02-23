import { get } from 'axios'

const protocol = 'https://'
const host = 'www.thecocktaildb.com/'

function listDrinks (category) {
  const resource = `api/json/v1/1/filter.php?c=`
  const API_URL = `${protocol}${host}${resource}${category}`

  return get(API_URL)
}

function categories () {
  const resource = `api/json/v1/1/list.php?c=list`
  const API_URL = `${protocol}${host}${resource}`

  return get(API_URL)
}

function getDrink (idDrink) {
  const resource = `api/json/v1/1/lookup.php?i=`
  const API_URL = `${protocol}${host}${resource}${idDrink}`
  return get(API_URL)
}

export {
  listDrinks,
  categories,
  getDrink
}