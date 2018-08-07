"use strict";
const Constants = require ("../../../Constants");
const CalltheGatewatchBase = require("../setOGW/CalltheGatewatch");

class CalltheGatewatch extends CalltheGatewatchBase {
  constructor (game) {
    super(game, "Call the Gatewatch", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = CalltheGatewatch;
