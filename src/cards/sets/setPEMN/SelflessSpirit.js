"use strict";
const Constants = require ("../../../Constants");
const SelflessSpiritBase = require("../setEMN/SelflessSpirit");

class SelflessSpirit extends SelflessSpiritBase {
  constructor (game) {
    super(game, "Selfless Spirit", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SelflessSpirit;
