"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NovaPentacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Nova Pentacle", "Legends", "LEG");
  }
}

module.exports = NovaPentacle;
