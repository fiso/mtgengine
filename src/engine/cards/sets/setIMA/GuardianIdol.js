"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Idol", "Iconic Masters", "IMA");
  }
}

module.exports = GuardianIdol;
