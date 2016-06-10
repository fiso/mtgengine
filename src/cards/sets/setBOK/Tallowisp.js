"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tallowisp extends UnimplementedCard {
  constructor (game) {
    super(game, "Tallowisp", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Tallowisp;
