"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AinokTracker extends Card {
  constructor(game) {
    super(game, "Ainok Tracker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AinokTracker;
