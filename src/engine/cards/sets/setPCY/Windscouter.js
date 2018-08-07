"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windscouter extends UnimplementedCard {
  constructor (game) {
    super(game, "Windscouter", "Prophecy", "PCY");
  }
}

module.exports = Windscouter;
