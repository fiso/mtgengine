"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Howling Fury", "Portal", "POR");
  }
}

module.exports = HowlingFury;
