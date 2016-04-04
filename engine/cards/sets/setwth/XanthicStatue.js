"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class XanthicStatue extends Card {
  constructor(game) {
    super(game, "Xanthic Statue", "Weatherlight", "WTH");
  }
}

module.exports = XanthicStatue;
