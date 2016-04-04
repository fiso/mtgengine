"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PilgrimsEyeBase = require("../setBFZ/PilgrimsEye.js");

class PilgrimsEye extends PilgrimsEyeBase {
  constructor(game) {
    super(game, "Pilgrim's Eye", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PilgrimsEye;
