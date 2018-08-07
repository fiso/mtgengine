"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quash extends UnimplementedCard {
  constructor (game) {
    super(game, "Quash", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Quash;
