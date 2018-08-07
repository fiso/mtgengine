"use strict";
const Constants = require ("../../../Constants");
const RadhaHeirtoKeldBase = require("../setDDS/RadhaHeirtoKeld");

class RadhaHeirtoKeld extends RadhaHeirtoKeldBase {
  constructor (game) {
    super(game, "Radha, Heir to Keld", "Planar Chaos", "PLC");
  }
}

module.exports = RadhaHeirtoKeld;
