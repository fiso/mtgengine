"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sirocco extends UnimplementedCard {
  constructor (game) {
    super(game, "Sirocco", "Mirage", "MIR");
  }
}

module.exports = Sirocco;
