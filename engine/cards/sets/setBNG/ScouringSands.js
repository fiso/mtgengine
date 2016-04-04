"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScouringSands extends UnimplementedCard {
  constructor(game) {
    super(game, "Scouring Sands", "Born of the Gods", "BNG");
  }
}

module.exports = ScouringSands;
