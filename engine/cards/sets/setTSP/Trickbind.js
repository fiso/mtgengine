"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Trickbind extends Card {
  constructor(game) {
    super(game, "Trickbind", "Time Spiral", "TSP");
  }
}

module.exports = Trickbind;
