"use strict";
const Constants = require ("../../../Constants");
const StromkirkOccultistBase = require("../setEMN/StromkirkOccultist");

class StromkirkOccultist extends StromkirkOccultistBase {
  constructor (game) {
    super(game, "Stromkirk Occultist", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = StromkirkOccultist;
