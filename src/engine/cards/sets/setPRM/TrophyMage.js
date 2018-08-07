"use strict";
const Constants = require ("../../../Constants");
const TrophyMageBase = require("../setDDU/TrophyMage");

class TrophyMage extends TrophyMageBase {
  constructor (game) {
    super(game, "Trophy Mage", "Magic Online Promos", "PRM");
  }
}

module.exports = TrophyMage;
