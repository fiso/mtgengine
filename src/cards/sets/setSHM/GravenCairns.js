"use strict";
const Constants = require ("../../../Constants");
const GravenCairnsBase = require("../setFUT/GravenCairns");

class GravenCairns extends GravenCairnsBase {
  constructor (game) {
    super(game, "Graven Cairns", "Shadowmoor", "SHM");
  }
}

module.exports = GravenCairns;
