"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaleMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Pale Moon", "Nemesis", "NMS");
  }
}

module.exports = PaleMoon;
