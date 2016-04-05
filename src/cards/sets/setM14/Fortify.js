"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fortify extends UnimplementedCard {
  constructor(game) {
    super(game, "Fortify", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Fortify;
