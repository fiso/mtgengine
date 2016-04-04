"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianofSolitude extends UnimplementedCard {
  constructor(game) {
    super(game, "Guardian of Solitude", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GuardianofSolitude;
