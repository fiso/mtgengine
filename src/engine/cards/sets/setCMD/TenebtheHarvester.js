"use strict";
const Constants = require ("../../../Constants");
const TenebtheHarvesterBase = require("../setC17/TenebtheHarvester");

class TenebtheHarvester extends TenebtheHarvesterBase {
  constructor (game) {
    super(game, "Teneb, the Harvester", "Commander 2011", "CMD");
  }
}

module.exports = TenebtheHarvester;
