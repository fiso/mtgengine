"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pestermite extends UnimplementedCard {
  constructor (game) {
    super(game, "Pestermite", "Lorwyn", "LRW");
  }
}

module.exports = Pestermite;
