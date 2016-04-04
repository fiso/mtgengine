"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrullWizard extends Card {
  constructor(game) {
    super(game, "Thrull Wizard", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullWizard;
