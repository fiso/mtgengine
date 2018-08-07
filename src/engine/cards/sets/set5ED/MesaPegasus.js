'use strict';
const Constants = require('../../../Constants');
const MesaPegasusBase = require('../setMED/MesaPegasus');

class MesaPegasus extends MesaPegasusBase {
  constructor (game) {
    super(game, 'Mesa Pegasus', 'Fifth Edition', '5ED');
  }
}

module.exports = MesaPegasus;
