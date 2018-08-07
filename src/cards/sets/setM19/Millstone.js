"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Millstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Millstone", "Core Set 2019", "M19");
  }
}

module.exports = Millstone;
