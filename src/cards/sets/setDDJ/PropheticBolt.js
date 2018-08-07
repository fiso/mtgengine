"use strict";
const Constants = require ("../../../Constants");
const PropheticBoltBase = require("../setC15/PropheticBolt");

class PropheticBolt extends PropheticBoltBase {
  constructor (game) {
    super(game, "Prophetic Bolt", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PropheticBolt;
