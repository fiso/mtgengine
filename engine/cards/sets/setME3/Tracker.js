"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tracker extends Card {
  constructor(game) {
    super(game, "Tracker", "Masters Edition III", "ME3");
  }
}

module.exports = Tracker;
