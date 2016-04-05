"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofSalt extends UnimplementedCard {
  constructor(game) {
    super(game, "Rain of Salt", "Portal", "POR");
  }
}

module.exports = RainofSalt;
