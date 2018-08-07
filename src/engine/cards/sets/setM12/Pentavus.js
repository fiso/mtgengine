"use strict";
const Constants = require ("../../../Constants");
const PentavusBase = require("../setCM2/Pentavus");

class Pentavus extends PentavusBase {
  constructor (game) {
    super(game, "Pentavus", "Magic 2012", "M12");
  }
}

module.exports = Pentavus;
