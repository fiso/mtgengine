"use strict";
const Constants = require ("../../../Constants");
const HollowhengeSpiritBase = require("../setCN2/HollowhengeSpirit");

class HollowhengeSpirit extends HollowhengeSpiritBase {
  constructor (game) {
    super(game, "Hollowhenge Spirit", "Dark Ascension", "DKA");
  }
}

module.exports = HollowhengeSpirit;
