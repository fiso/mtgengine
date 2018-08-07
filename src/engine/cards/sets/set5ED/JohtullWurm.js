'use strict';
const Constants = require('../../../Constants');
const JohtullWurmBase = require('../setME2/JohtullWurm');

class JohtullWurm extends JohtullWurmBase {
  constructor (game) {
    super(game, 'Johtull Wurm', 'Fifth Edition', '5ED');
  }
}

module.exports = JohtullWurm;
