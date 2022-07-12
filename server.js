
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const SERVICE = process.env.NAME;

async function main() {
  while(true) {
    console.log(`${SERVICE} rocks!`);
    await sleep(5000);
  }
}

main();
