'use strict';
const Constants = require('../../../Constants');
const IcatianScoutBase = require('../setME2/IcatianScout');

class IcatianScout extends IcatianScoutBase {
  constructor (game) {
    super(game, 'Icatian Scout', 'Fifth Edition', '5ED');
  }
}

module.exports = IcatianScout;
