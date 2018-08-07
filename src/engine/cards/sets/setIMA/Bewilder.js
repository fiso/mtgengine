"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bewilder extends UnimplementedCard {
  constructor (game) {
    super(game, "Bewilder", "Iconic Masters", "IMA");
  }
}

module.exports = Bewilder;
