"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Overseer", "Dominaria", "DOM");
  }
}

module.exports = KeldonOverseer;
