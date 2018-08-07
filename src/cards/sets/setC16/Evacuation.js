"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evacuation extends UnimplementedCard {
  constructor (game) {
    super(game, "Evacuation", "Commander 2016", "C16");
  }
}

module.exports = Evacuation;
