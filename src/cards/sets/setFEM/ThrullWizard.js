"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullWizard extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrull Wizard", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullWizard;
