"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BearsCompanion extends UnimplementedCard {
  constructor(game) {
    super(game, "Bear's Companion", "Khans of Tarkir", "KTK");
  }
}

module.exports = BearsCompanion;
