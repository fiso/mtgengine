"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kaleidostone extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaleidostone", "Conflux", "CON");
  }
}

module.exports = Kaleidostone;
