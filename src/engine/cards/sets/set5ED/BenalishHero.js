'use strict';
const Constants = require('../../../Constants');
const BenalishHeroBase = require('../setMED/BenalishHero');

class BenalishHero extends BenalishHeroBase {
  constructor (game) {
    super(game, 'Benalish Hero', 'Fifth Edition', '5ED');
  }
}

module.exports = BenalishHero;
