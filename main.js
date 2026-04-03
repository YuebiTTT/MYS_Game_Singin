import { doMYSSign } from './src/MYS/index.js'
import { doCloudSign } from './src/MihoyoCloud/index.js'

async function main() {
  await doMYSSign('Genshin')
  await doMYSSign('StarRail')
  await doMYSSign('Zenless')
  await doCloudSign('CloudYS')
  await doCloudSign('CloudSR')
}

main().then()
