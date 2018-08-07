"use strict";
const Constants = require ("../../../Constants");
const WizardReplicaBase = require("../setHOP/WizardReplica");

class WizardReplica extends WizardReplicaBase {
  constructor (game) {
    super(game, "Wizard Replica", "Mirrodin", "MRD");
  }
}

module.exports = WizardReplica;
