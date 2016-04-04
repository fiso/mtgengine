"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TundraKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Tundra Kavu", "Apocalypse", "APC");
  }
}

module.exports = TundraKavu;
