"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hubris extends UnimplementedCard {
  constructor(game) {
    super(game, "Hubris", "Journey into Nyx", "JOU");
  }
}

module.exports = Hubris;
