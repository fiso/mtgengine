"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChiseiHeartofOceans extends Card {
  constructor(game) {
    super(game, "Chisei, Heart of Oceans", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ChiseiHeartofOceans;
