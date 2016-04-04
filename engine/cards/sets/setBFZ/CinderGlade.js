"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderGlade extends Card {
  constructor(game) {
    super(game, "Cinder Glade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CinderGlade;
