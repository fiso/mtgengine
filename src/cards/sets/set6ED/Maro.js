"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Maro extends UnimplementedCard {
  constructor(game) {
    super(game, "Maro", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Maro;
