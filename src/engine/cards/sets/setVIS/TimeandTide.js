"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeandTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Time and Tide", "Visions", "VIS");
  }
}

module.exports = TimeandTide;
