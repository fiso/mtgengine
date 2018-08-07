'use strict';
const Constants = require('../../../Constants');
const SpellBlastBase = require('../setTPR/SpellBlast');

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, 'Spell Blast', 'Unlimited Edition', '2ED');
  }
}

module.exports = SpellBlast;
