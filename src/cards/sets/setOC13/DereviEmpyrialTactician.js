"use strict";
const Constants = require ("../../../Constants");
const DereviEmpyrialTacticianBase = require("../setCMA/DereviEmpyrialTactician");

class DereviEmpyrialTactician extends DereviEmpyrialTacticianBase {
  constructor (game) {
    super(game, "Derevi, Empyrial Tactician", "Commander 2013 Oversized", "OC13");
  }
}

module.exports = DereviEmpyrialTactician;
