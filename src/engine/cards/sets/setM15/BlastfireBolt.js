"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastfireBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Blastfire Bolt", "Magic 2015", "M15");
  }
}

module.exports = BlastfireBolt;
