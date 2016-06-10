"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Framed extends UnimplementedCard {
  constructor (game) {
    super(game, "Framed!", "Unhinged", "UNH");
  }
}

module.exports = Framed;
