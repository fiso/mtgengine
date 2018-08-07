"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnakeCultInitiation extends UnimplementedCard {
  constructor (game) {
    super(game, "Snake Cult Initiation", "Future Sight", "FUT");
  }
}

module.exports = SnakeCultInitiation;
