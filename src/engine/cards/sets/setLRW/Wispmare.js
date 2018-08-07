"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wispmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Wispmare", "Lorwyn", "LRW");
  }
}

module.exports = Wispmare;
