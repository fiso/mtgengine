"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manakin extends UnimplementedCard {
  constructor (game) {
    super(game, "Manakin", "Iconic Masters", "IMA");
  }
}

module.exports = Manakin;
