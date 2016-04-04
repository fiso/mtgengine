"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EleshNornGrandCenobite extends Card {
  constructor(game) {
    super(game, "Elesh Norn, Grand Cenobite", "Judge Gift Program", "pJGP");
  }
}

module.exports = EleshNornGrandCenobite;
