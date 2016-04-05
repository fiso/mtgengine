"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasOutrage extends UnimplementedCard {
  constructor(game) {
    super(game, "Chandra's Outrage", "Archenemy", "ARC");
  }
}

module.exports = ChandrasOutrage;
