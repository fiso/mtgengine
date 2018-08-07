"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeofNeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Time of Need", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TimeofNeed;
