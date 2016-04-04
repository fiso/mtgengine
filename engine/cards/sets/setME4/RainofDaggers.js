"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofDaggers extends Card {
  constructor(game) {
    super(game, "Rain of Daggers", "Masters Edition IV", "ME4");
  }
}

module.exports = RainofDaggers;
