"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianWarMachine extends Card {
  constructor(game) {
    super(game, "Vodalian War Machine", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianWarMachine;
