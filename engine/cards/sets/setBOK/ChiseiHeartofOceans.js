"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChiseiHeartofOceans extends UnimplementedCard {
  constructor(game) {
    super(game, "Chisei, Heart of Oceans", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ChiseiHeartofOceans;
