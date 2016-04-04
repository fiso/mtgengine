"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MuseVessel extends Card {
  constructor(game) {
    super(game, "Muse Vessel", "Dissension", "DIS");
  }
}

module.exports = MuseVessel;
