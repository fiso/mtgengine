"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlumesofPeace extends Card {
  constructor(game) {
    super(game, "Plumes of Peace", "Dissension", "DIS");
  }
}

module.exports = PlumesofPeace;
