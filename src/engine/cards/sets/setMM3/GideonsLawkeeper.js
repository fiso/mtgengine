"use strict";
const Constants = require ("../../../Constants");
const GideonsLawkeeperBase = require("../setE01/GideonsLawkeeper");

class GideonsLawkeeper extends GideonsLawkeeperBase {
  constructor (game) {
    super(game, "Gideon's Lawkeeper", "Modern Masters 2017", "MM3");
  }
}

module.exports = GideonsLawkeeper;
