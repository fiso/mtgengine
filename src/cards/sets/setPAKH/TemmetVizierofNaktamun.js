"use strict";
const Constants = require ("../../../Constants");
const TemmetVizierofNaktamunBase = require("../setAKH/TemmetVizierofNaktamun");

class TemmetVizierofNaktamun extends TemmetVizierofNaktamunBase {
  constructor (game) {
    super(game, "Temmet, Vizier of Naktamun", "Amonkhet Promos", "PAKH");
  }
}

module.exports = TemmetVizierofNaktamun;
