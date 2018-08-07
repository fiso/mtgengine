"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thornling extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornling", "Conflux", "CON");
  }
}

module.exports = Thornling;
