"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartForager extends UnimplementedCard {
  constructor(game) {
    super(game, "Boggart Forager", "Lorwyn", "LRW");
  }
}

module.exports = BoggartForager;
