"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetStaticaster extends Card {
  constructor(game) {
    super(game, "Izzet Staticaster", "Return to Ravnica", "RTR");
  }
}

module.exports = IzzetStaticaster;
