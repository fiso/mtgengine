"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousSpoils extends UnimplementedCard {
  constructor(game) {
    super(game, "Murderous Spoils", "Darksteel", "DST");
  }
}

module.exports = MurderousSpoils;
