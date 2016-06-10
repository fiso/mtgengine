"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Beast", "Arabian Nights", "ARN");
  }
}

module.exports = GuardianBeast;
