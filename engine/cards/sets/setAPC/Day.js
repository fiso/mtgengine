"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Day extends UnimplementedCard {
  constructor(game) {
    super(game, "Day", "Apocalypse", "APC");
  }
}

module.exports = Day;
