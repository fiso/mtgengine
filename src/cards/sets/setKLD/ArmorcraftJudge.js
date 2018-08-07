"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorcraftJudge extends UnimplementedCard {
  constructor (game) {
    super(game, "Armorcraft Judge", "Kaladesh", "KLD");
  }
}

module.exports = ArmorcraftJudge;
