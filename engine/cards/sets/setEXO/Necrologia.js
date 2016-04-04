"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necrologia extends Card {
  constructor(game) {
    super(game, "Necrologia", "Exodus", "EXO");
  }
}

module.exports = Necrologia;
