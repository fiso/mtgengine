"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flameshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Flameshot", "Prophecy", "PCY");
  }
}

module.exports = Flameshot;
