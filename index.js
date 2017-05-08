const spawn = require('child_process').spawn;
const fs = require('fs');
const ncp = require('ncp');
const inquirer = require('inquirer');

require('colors');

const args = process.argv;
const name = args[2];

if (!name) {
  console.error('You must enter a name for your project. `nrp ProjectName`'.yellow);
  process.exit(0);
}

// CREATE THE DIRECTORY FOR THE PROJECT
console.log(`Creating new directory '${name}'...`.underline);
fs.mkdir(name, (fsError) => {

  if (fsError && fsError.code === 'EEXIST') {
    console.log('A directory with that name already exists. \nPlease try again with a different name.'.red);
    process.exit(0);
  }

  // COPY THE FOLDER TEMPLATE TO THE NEW PROJECT
  ncp(`${__dirname}/template`, `${process.cwd()}/${name}`, (cpError) => {

    if (cpError) {
      console.log(cpError);
      process.exit(0);
    }

    console.log(`Successfully created new project '${name}'!`.green);
    console.log();
    console.log('Next Steps:'.blue);
    console.log(`   cd ${name}`);
    console.log(`   npm install (or yarn install)`);
    console.log();
    console.log('npm start'.yellow);
    console.log('   Start the webpack dev server');
    console.log();
    console.log('npm run build'.yellow);
    console.log('   Build the production app');
    console.log();
  });
});
