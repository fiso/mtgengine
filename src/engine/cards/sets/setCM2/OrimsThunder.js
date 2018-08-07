"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsThunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim's Thunder", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = OrimsThunder;
