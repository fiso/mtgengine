"use strict";
const Constants = require ("../../../Constants");
const DeploytheGatewatchBase = require("../setEMN/DeploytheGatewatch");

class DeploytheGatewatch extends DeploytheGatewatchBase {
  constructor (game) {
    super(game, "Deploy the Gatewatch", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = DeploytheGatewatch;
