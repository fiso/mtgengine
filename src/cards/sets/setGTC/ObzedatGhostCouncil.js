"use strict";
const Constants = require ("../../../Constants");
const ObzedatGhostCouncilBase = require("../setMM3/ObzedatGhostCouncil");

class ObzedatGhostCouncil extends ObzedatGhostCouncilBase {
  constructor (game) {
    super(game, "Obzedat, Ghost Council", "Gatecrash", "GTC");
  }
}

module.exports = ObzedatGhostCouncil;
