"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvianChangeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Avian Changeling", "Lorwyn", "LRW");
  }
}

module.exports = AvianChangeling;
