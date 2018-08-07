"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeofIce extends UnimplementedCard {
  constructor (game) {
    super(game, "Time of Ice", "Dominaria", "DOM");
  }
}

module.exports = TimeofIce;
