'use strict';
const Constants = require('../../../Constants');
const IcatianPhalanxBase = require('../setME2/IcatianPhalanx');

class IcatianPhalanx extends IcatianPhalanxBase {
  constructor (game) {
    super(game, 'Icatian Phalanx', 'Fifth Edition', '5ED');
  }
}

module.exports = IcatianPhalanx;
