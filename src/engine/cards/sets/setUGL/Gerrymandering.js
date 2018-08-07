"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gerrymandering extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrymandering", "Unglued", "UGL");
  }
}

module.exports = Gerrymandering;
