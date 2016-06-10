"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyFirstTome extends UnimplementedCard {
  constructor (game) {
    super(game, "My First Tome", "Unhinged", "UNH");
  }
}

module.exports = MyFirstTome;
