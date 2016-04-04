"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PropheticBoltBase = require("../setAPC/PropheticBolt.js");

class PropheticBolt extends PropheticBoltBase {
  constructor(game) {
    super(game, "Prophetic Bolt", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PropheticBolt;
