"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MisshapenFiend extends Card {
  constructor(game) {
    super(game, "Misshapen Fiend", "Mercadian Masques", "MMQ");
  }
}

module.exports = MisshapenFiend;
