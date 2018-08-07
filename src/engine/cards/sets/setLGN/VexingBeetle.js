"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VexingBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Vexing Beetle", "Legions", "LGN");
  }
}

module.exports = VexingBeetle;
