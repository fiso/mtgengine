"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneLighthouse extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Lighthouse", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ArcaneLighthouse;
