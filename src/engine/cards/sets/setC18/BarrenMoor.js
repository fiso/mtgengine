"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrenMoor extends UnimplementedCard {
  constructor (game) {
    super(game, "Barren Moor", "Commander 2018", "C18");
  }
}

module.exports = BarrenMoor;
