"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneSplinters extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Splinters", "Avacyn Restored", "AVR");
  }
}

module.exports = BoneSplinters;
