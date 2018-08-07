"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shuriken extends UnimplementedCard {
  constructor (game) {
    super(game, "Shuriken", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Shuriken;
