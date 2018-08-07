"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightyLeap extends UnimplementedCard {
  constructor (game) {
    super(game, "Mighty Leap", "Core Set 2019", "M19");
  }
}

module.exports = MightyLeap;
