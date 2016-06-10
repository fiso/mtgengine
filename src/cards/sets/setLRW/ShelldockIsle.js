"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelldockIsle extends UnimplementedCard {
  constructor (game) {
    super(game, "Shelldock Isle", "Lorwyn", "LRW");
  }
}

module.exports = ShelldockIsle;
