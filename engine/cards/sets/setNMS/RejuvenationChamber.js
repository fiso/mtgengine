"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RejuvenationChamber extends Card {
  constructor(game) {
    super(game, "Rejuvenation Chamber", "Nemesis", "NMS");
  }
}

module.exports = RejuvenationChamber;
