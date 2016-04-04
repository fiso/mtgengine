"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrabtheReins extends Card {
  constructor(game) {
    super(game, "Grab the Reins", "Mirrodin", "MRD");
  }
}

module.exports = GrabtheReins;
