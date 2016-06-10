"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Island extends UnimplementedCard {
  constructor (game) {
    super(game, "Island", "Archenemy", "ARC");
  }
}

module.exports = Island;
