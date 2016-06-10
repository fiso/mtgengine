"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpentheArmory extends UnimplementedCard {
  constructor (game) {
    super(game, "Open the Armory", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OpentheArmory;
