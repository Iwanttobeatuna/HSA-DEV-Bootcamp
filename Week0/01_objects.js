/**
  These exercises aim to get you familiar with object syntax. Hopefully it doesn't trigger
  highschool biology flashbacks.
 */

// You can think of an object like a python dictionary or tree
// They usually have lots of deeply nested data
const TreeOfLife = {
  // Objects can contain basic data types ...
  rank: 'domain',
  archae: 'archaebacteria',
  bacteria: 'eubacteria',
  // ... but they can also contain nested objects, arrays, functions, or anything else
  eukarya: {
    rank: 'kingdom',
    plantae: ['my succulent', 'tomatoes', 'big trees'],
    animalia: {
      rank: 'phylum',
      birds: 'work for the bourgeoisie.',
      humans: ['you', 'me', 'us', 'them', 'everyone!'],
    },
    fungi: {
      guy: "he's fun",
    },
    protista: 'What even is this?',
  },
  // The best domain's key
  bestDomain: 'archae',
}

//TODO -- Write a function which returns the domain "archae"
const getArchae = () => {
  return TreeOfLife.archae
}

// TODO -- Write a function which returns the array of humans
const getHumans = () => {
  return TreeOfLife.eukarya.animalia.humans
}

// TODO -- Write a function which adds a name to the array of humans
const addHuman = (name) => {
  let human = TreeOfLife.eukarya.animalia.humans
  return human.push(name)

}

// TODO -- Write a fuction which returns the data representing the "bestDomain"
const getBestDomain = () => {
  x = TreeOfLife.bestDomain
  return (Object.values(x))
}

// TODO -- Write a function which sets the best domain to "eukarya" and then returns the "bestDomain"
const setGetBestDomain = () => {
  let y = TreeOfLife.bestDomain
  y = "eukarya"
  return (Object.values(y))
}

/**
  TODO
  Write a function using destructuring and object renaming which returns an array with all the ranks like:
  (Don't hardcode it, pull it from the TreeOfLife)
  [
    'domain',
    'kingdom',
    'phylum',
  ]
 */
const getRanks = () => {
  let arr = new Array()
  const r2 = TreeOfLife.eukarya.animalia.rank
  const { rank, eukarya:{rank:r1}} = TreeOfLife
  arr.push(rank,r1,r2)
  return arr
}

// TODO -- Write a function which uses destructuring and the rest operator to return everything BUT the "eukarya"
const noEukaryotes = () => {
  const { eukarya, ...Rest } = TreeOfLife
  return Rest
}

module.exports = {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
}
