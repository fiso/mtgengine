"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foresee extends UnimplementedCard {
  constructor (game) {
    super(game, "Foresee", "Magic 2011", "M11");
  }
}

module.exports = Foresee;
