"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Angel", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = GuardianAngel;
