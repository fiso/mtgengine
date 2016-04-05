"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiderwigBoggart extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiderwig Boggart", "Lorwyn", "LRW");
  }
}

module.exports = SpiderwigBoggart;
