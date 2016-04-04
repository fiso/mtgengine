"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninScimitar extends Card {
  constructor(game) {
    super(game, "Leonin Scimitar", "Mirrodin", "MRD");
  }
}

module.exports = LeoninScimitar;
