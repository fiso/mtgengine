"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShriekingMogg extends Card {
  constructor(game) {
    super(game, "Shrieking Mogg", "Nemesis", "NMS");
  }
}

module.exports = ShriekingMogg;
