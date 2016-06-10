"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scapeshift extends UnimplementedCard {
  constructor (game) {
    super(game, "Scapeshift", "Morningtide", "MOR");
  }
}

module.exports = Scapeshift;
