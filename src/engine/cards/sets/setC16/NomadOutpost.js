"use strict";
const Constants = require ("../../../Constants");
const NomadOutpostBase = require("../setC17/NomadOutpost");

class NomadOutpost extends NomadOutpostBase {
  constructor (game) {
    super(game, "Nomad Outpost", "Commander 2016", "C16");
  }
}

module.exports = NomadOutpost;
