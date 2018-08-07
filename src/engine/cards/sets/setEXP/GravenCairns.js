"use strict";
const Constants = require ("../../../Constants");
const GravenCairnsBase = require("../setIMA/GravenCairns");

class GravenCairns extends GravenCairnsBase {
  constructor (game) {
    super(game, "Graven Cairns", "Zendikar Expeditions", "EXP");
  }
}

module.exports = GravenCairns;
