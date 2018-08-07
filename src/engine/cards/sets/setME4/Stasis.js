"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Stasis", "Masters Edition IV", "ME4");
  }
}

module.exports = Stasis;
