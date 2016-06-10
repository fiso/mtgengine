"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilkenfistFighter extends UnimplementedCard {
  constructor (game) {
    super(game, "Silkenfist Fighter", "Nemesis", "NMS");
  }
}

module.exports = SilkenfistFighter;
