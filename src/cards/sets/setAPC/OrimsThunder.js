"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsThunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim's Thunder", "Apocalypse", "APC");
  }
}

module.exports = OrimsThunder;
