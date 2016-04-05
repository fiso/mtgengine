"use strict";
const Constants = require ("../../../Constants");
const WizardReplicaBase = require("../setMRD/WizardReplica");

class WizardReplica extends WizardReplicaBase {
  constructor(game) {
    super(game, "Wizard Replica", "Planechase", "HOP");
  }
}

module.exports = WizardReplica;
