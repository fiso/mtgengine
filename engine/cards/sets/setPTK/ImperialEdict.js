"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialEdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperial Edict", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialEdict;
