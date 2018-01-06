import config from '../config'
import entries from '../entries'
import { stripSlashes } from '../app/utils'

// decorate all entries with full urls
if (config.host) {
  entries.forEach(entry => {
    entry.url = `${stripSlashes(config.host)}/${stripSlashes(entry.path)}`
  })
}

const strippedPaths = entries.map(entry => stripSlashes(entry.path))

function findUniqueTopLevelPathSegments() {
  return [...new Set(strippedPaths.map(path => path.split('/')[0]))]
}

function findNestedTopLevelPathSegments() {
  return strippedPaths
    .filter(path => path.split('/').length > 1)
    .map(path => path.split('/')[0])
}

const uniqueTopLevelPathSegments = findUniqueTopLevelPathSegments()
const nestedTopLevelPathSegments = findNestedTopLevelPathSegments()
const byTopLevelPathSegment = {}
uniqueTopLevelPathSegments.forEach(topLevelPathSegment => {
  if (nestedTopLevelPathSegments.indexOf(topLevelPathSegment) !== -1) {
    byTopLevelPathSegment[topLevelPathSegment] = entries.filter(entry =>
      stripSlashes(entry.path).startsWith(topLevelPathSegment)
    )
  } else {
    byTopLevelPathSegment[topLevelPathSegment] = entries.find(
      entry => stripSlashes(entry.path) === topLevelPathSegment
    )
  }
})

const reverseChronological = entries
  .filter(entry => entry.date)
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export default {
  all: entries,
  uniqueTopLevelPathSegments,
  nestedTopLevelPathSegments,
  byTopLevelPathSegment,
  reverseChronological,
}
