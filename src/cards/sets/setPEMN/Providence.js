"use strict";
const Constants = require ("../../../Constants");
const ProvidenceBase = require("../setEMN/Providence");

class Providence extends ProvidenceBase {
  constructor (game) {
    super(game, "Providence", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = Providence;
