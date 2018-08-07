"use strict";
const Constants = require ("../../../Constants");
const GravenCairnsBase = require("../setIMA/GravenCairns");

class GravenCairns extends GravenCairnsBase {
  constructor (game) {
    super(game, "Graven Cairns", "Future Sight", "FUT");
  }
}

module.exports = GravenCairns;
