'use strict';
const Constants = require('../../../Constants');
const DemonicTutorBase = require('../setDVD/DemonicTutor');

class DemonicTutor extends DemonicTutorBase {
  constructor (game) {
    super(game, 'Demonic Tutor', 'Revised Edition', '3ED');
  }
}

module.exports = DemonicTutor;
