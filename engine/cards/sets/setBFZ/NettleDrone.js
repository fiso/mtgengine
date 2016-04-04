"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NettleDrone extends Card {
  constructor(game) {
    super(game, "Nettle Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NettleDrone;
