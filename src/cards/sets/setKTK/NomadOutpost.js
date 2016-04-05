"use strict";
const Constants = require ("../../../Constants");
const NomadOutpostBase = require("../setDDN/NomadOutpost");

class NomadOutpost extends NomadOutpostBase {
  constructor(game) {
    super(game, "Nomad Outpost", "Khans of Tarkir", "KTK");
  }
}

module.exports = NomadOutpost;
