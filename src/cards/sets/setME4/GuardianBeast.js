"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Beast", "Masters Edition IV", "ME4");
  }
}

module.exports = GuardianBeast;
