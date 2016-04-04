"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianMage extends Card {
  constructor(game) {
    super(game, "Vodalian Mage", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianMage;
