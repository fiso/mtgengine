"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TenebtheHarvesterBase = require("../setCMD/TenebtheHarvester.js");

class TenebtheHarvester extends TenebtheHarvesterBase {
  constructor(game) {
    super(game, "Teneb, the Harvester", "Planar Chaos", "PLC");
  }
}

module.exports = TenebtheHarvester;
