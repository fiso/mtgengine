"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NomadsAssemblyBase = require("../setC14/NomadsAssembly.js");

class NomadsAssembly extends NomadsAssemblyBase {
  constructor(game) {
    super(game, "Nomads' Assembly", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NomadsAssembly;
