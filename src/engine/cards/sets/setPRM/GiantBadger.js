"use strict";
const Constants = require ("../../../Constants");
const GiantBadgerBase = require("../set8ED/GiantBadger");

class GiantBadger extends GiantBadgerBase {
  constructor (game) {
    super(game, "Giant Badger", "Magic Online Promos", "PRM");
  }
}

module.exports = GiantBadger;
