"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NamelessInversion extends UnimplementedCard {
  constructor(game) {
    super(game, "Nameless Inversion", "Lorwyn", "LRW");
  }
}

module.exports = NamelessInversion;
