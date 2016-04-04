"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WizardReplica extends Card {
  constructor(game) {
    super(game, "Wizard Replica", "Mirrodin", "MRD");
  }
}

module.exports = WizardReplica;
