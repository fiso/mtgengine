"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiliPala extends UnimplementedCard {
  constructor(game) {
    super(game, "Pili-Pala", "Shadowmoor", "SHM");
  }
}

module.exports = PiliPala;
