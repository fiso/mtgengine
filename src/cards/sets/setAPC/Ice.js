"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ice extends UnimplementedCard {
  constructor(game) {
    super(game, "Ice", "Apocalypse", "APC");
  }
}

module.exports = Ice;
