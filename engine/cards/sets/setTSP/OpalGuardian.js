"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalGuardian extends Card {
  constructor(game) {
    super(game, "Opal Guardian", "Time Spiral", "TSP");
  }
}

module.exports = OpalGuardian;
