"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Woodripper extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodripper", "Nemesis", "NEM");
  }
}

module.exports = Woodripper;
