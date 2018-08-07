"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Defang extends UnimplementedCard {
  constructor (game) {
    super(game, "Defang", "Avacyn Restored", "AVR");
  }
}

module.exports = Defang;
