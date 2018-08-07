"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizard Replica", "Planechase", "HOP");
  }
}

module.exports = WizardReplica;
