"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mightstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Mightstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Mightstone;
