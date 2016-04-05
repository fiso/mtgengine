"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Glacial Stalker", "Khans of Tarkir", "KTK");
  }
}

module.exports = GlacialStalker;
