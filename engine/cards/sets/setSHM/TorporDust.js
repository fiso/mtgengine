"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorporDust extends Card {
  constructor(game) {
    super(game, "Torpor Dust", "Shadowmoor", "SHM");
  }
}

module.exports = TorporDust;
