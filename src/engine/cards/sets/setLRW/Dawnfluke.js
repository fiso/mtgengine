"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dawnfluke extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawnfluke", "Lorwyn", "LRW");
  }
}

module.exports = Dawnfluke;
