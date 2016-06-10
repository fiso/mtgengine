"use strict";
const Constants = require ("../../../Constants");
const NomadsAssemblyBase = require("../setC14/NomadsAssembly");

class NomadsAssembly extends NomadsAssemblyBase {
  constructor (game) {
    super(game, "Nomads' Assembly", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NomadsAssembly;
