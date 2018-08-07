"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scytheclaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Scytheclaw", "Legendary Cube", "PZ1");
  }
}

module.exports = Scytheclaw;
