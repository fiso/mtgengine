"use strict";
const Constants = require ("../../../Constants");
const DarkSalvationBase = require("../setEMN/DarkSalvation");

class DarkSalvation extends DarkSalvationBase {
  constructor (game) {
    super(game, "Dark Salvation", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = DarkSalvation;
