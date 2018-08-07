'use strict';
const Constants = require('../../../Constants');
const JayemdaeTomeBase = require('../setORI/JayemdaeTome');

class JayemdaeTome extends JayemdaeTomeBase {
  constructor (game) {
    super(game, 'Jayemdae Tome', 'Fifth Edition', '5ED');
  }
}

module.exports = JayemdaeTome;
