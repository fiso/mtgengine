"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaggedVeins extends UnimplementedCard {
  constructor(game) {
    super(game, "Ragged Veins", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RaggedVeins;
