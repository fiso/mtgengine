"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalderaLake extends UnimplementedCard {
  constructor (game) {
    super(game, "Caldera Lake", "Tempest", "TMP");
  }
}

module.exports = CalderaLake;
