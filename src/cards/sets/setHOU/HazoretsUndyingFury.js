"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazoretsUndyingFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Hazoret's Undying Fury", "Hour of Devastation", "HOU");
  }
}

module.exports = HazoretsUndyingFury;
