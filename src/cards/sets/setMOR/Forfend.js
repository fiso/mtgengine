"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forfend extends UnimplementedCard {
  constructor(game) {
    super(game, "Forfend", "Morningtide", "MOR");
  }
}

module.exports = Forfend;
