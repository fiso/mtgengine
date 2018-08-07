'use strict';
const Constants = require('../../../Constants');
const JandorsSaddlebagsBase = require('../set7ED/JandorsSaddlebags');

class JandorsSaddlebags extends JandorsSaddlebagsBase {
  constructor (game) {
    super(game, "Jandor's Saddlebags", 'Fifth Edition', '5ED');
  }
}

module.exports = JandorsSaddlebags;
