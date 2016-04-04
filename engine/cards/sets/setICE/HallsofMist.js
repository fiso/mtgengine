"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallsofMist extends Card {
  constructor(game) {
    super(game, "Halls of Mist", "Ice Age", "ICE");
  }
}

module.exports = HallsofMist;
