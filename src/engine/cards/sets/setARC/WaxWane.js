"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaxWane extends UnimplementedCard {
  constructor (game) {
    super(game, "Wax // Wane", "Archenemy", "ARC");
  }
}

module.exports = WaxWane;
