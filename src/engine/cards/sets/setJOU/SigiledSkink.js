"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigiledSkink extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigiled Skink", "Journey into Nyx", "JOU");
  }
}

module.exports = SigiledSkink;
