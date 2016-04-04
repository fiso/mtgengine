"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WizardReplicaBase = require("../setMRD/WizardReplica.js");

class WizardReplica extends WizardReplicaBase {
  constructor(game) {
    super(game, "Wizard Replica", "Planechase", "HOP");
  }
}

module.exports = WizardReplica;
