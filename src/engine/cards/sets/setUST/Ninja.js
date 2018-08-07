"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ninja extends UnimplementedCard {
  constructor (game) {
    super(game, "Ninja", "Unstable", "UST");
  }
}

module.exports = Ninja;
