"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Concentrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Concentrate", "Commander 2014", "C14");
  }
}

module.exports = Concentrate;
