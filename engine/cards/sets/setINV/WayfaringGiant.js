"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WayfaringGiant extends Card {
  constructor(game) {
    super(game, "Wayfaring Giant", "Invasion", "INV");
  }
}

module.exports = WayfaringGiant;
