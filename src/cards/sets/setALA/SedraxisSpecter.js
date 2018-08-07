"use strict";
const Constants = require ("../../../Constants");
const SedraxisSpecterBase = require("../setMM3/SedraxisSpecter");

class SedraxisSpecter extends SedraxisSpecterBase {
  constructor (game) {
    super(game, "Sedraxis Specter", "Shards of Alara", "ALA");
  }
}

module.exports = SedraxisSpecter;
