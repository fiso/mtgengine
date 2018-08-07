"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Floodchaser extends UnimplementedCard {
  constructor (game) {
    super(game, "Floodchaser", "Morningtide", "MOR");
  }
}

module.exports = Floodchaser;
