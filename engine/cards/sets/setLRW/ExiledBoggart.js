"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExiledBoggart extends Card {
  constructor(game) {
    super(game, "Exiled Boggart", "Lorwyn", "LRW");
  }
}

module.exports = ExiledBoggart;
