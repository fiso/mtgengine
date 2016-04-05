"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExiledBoggart extends UnimplementedCard {
  constructor(game) {
    super(game, "Exiled Boggart", "Lorwyn", "LRW");
  }
}

module.exports = ExiledBoggart;
