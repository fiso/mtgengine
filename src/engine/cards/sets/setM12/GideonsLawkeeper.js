"use strict";
const Constants = require ("../../../Constants");
const GideonsLawkeeperBase = require("../setE01/GideonsLawkeeper");

class GideonsLawkeeper extends GideonsLawkeeperBase {
  constructor (game) {
    super(game, "Gideon's Lawkeeper", "Magic 2012", "M12");
  }
}

module.exports = GideonsLawkeeper;
