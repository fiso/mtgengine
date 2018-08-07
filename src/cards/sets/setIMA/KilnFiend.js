"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KilnFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiln Fiend", "Iconic Masters", "IMA");
  }
}

module.exports = KilnFiend;
