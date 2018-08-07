"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Atog extends UnimplementedCard {
  constructor (game) {
    super(game, "Atog", "Masters Edition IV", "ME4");
  }
}

module.exports = Atog;
