"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartRamGang extends UnimplementedCard {
  constructor(game) {
    super(game, "Boggart Ram-Gang", "Gateway", "pGTW");
  }
}

module.exports = BoggartRamGang;
