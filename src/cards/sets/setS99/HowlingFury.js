"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Fury", "Starter 1999", "S99");
  }
}

module.exports = HowlingFury;
