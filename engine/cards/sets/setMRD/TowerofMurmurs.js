"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerofMurmurs extends Card {
  constructor(game) {
    super(game, "Tower of Murmurs", "Mirrodin", "MRD");
  }
}

module.exports = TowerofMurmurs;
