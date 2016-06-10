"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlanketofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blanket of Night", "Visions", "VIS");
  }
}

module.exports = BlanketofNight;
