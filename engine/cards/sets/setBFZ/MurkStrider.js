"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurkStrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Murk Strider", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MurkStrider;
