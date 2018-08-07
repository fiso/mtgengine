"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PheresBandWarchief extends UnimplementedCard {
  constructor (game) {
    super(game, "Pheres-Band Warchief", "Journey into Nyx", "JOU");
  }
}

module.exports = PheresBandWarchief;
