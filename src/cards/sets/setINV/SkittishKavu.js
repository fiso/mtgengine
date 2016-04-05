"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkittishKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Skittish Kavu", "Invasion", "INV");
  }
}

module.exports = SkittishKavu;
