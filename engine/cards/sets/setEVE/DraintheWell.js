"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DraintheWell extends Card {
  constructor(game) {
    super(game, "Drain the Well", "Eventide", "EVE");
  }
}

module.exports = DraintheWell;
