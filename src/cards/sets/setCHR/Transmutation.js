"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Transmutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Transmutation", "Chronicles", "CHR");
  }
}

module.exports = Transmutation;
