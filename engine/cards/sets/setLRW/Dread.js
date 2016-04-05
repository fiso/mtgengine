"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dread extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread", "Lorwyn", "LRW");
  }
}

module.exports = Dread;
