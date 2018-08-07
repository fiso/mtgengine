"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravePeril extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Peril", "Commander 2015", "C15");
  }
}

module.exports = GravePeril;
