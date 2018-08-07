"use strict";
const Constants = require ("../../../Constants");
const TenebtheHarvesterBase = require("../setC17/TenebtheHarvester");

class TenebtheHarvester extends TenebtheHarvesterBase {
  constructor (game) {
    super(game, "Teneb, the Harvester", "Planar Chaos", "PLC");
  }
}

module.exports = TenebtheHarvester;
