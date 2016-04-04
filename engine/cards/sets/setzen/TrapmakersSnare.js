"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrapmakersSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Trapmaker's Snare", "Zendikar", "ZEN");
  }
}

module.exports = TrapmakersSnare;
