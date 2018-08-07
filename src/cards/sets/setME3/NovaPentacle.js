"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NovaPentacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Nova Pentacle", "Masters Edition III", "ME3");
  }
}

module.exports = NovaPentacle;
