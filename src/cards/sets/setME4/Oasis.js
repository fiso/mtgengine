"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Oasis", "Masters Edition IV", "ME4");
  }
}

module.exports = Oasis;
