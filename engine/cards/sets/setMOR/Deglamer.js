"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deglamer extends UnimplementedCard {
  constructor(game) {
    super(game, "Deglamer", "Morningtide", "MOR");
  }
}

module.exports = Deglamer;
