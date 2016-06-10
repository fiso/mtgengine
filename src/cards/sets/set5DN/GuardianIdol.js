"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Idol", "Fifth Dawn", "5DN");
  }
}

module.exports = GuardianIdol;
