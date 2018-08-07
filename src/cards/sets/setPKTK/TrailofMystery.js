"use strict";
const Constants = require ("../../../Constants");
const TrailofMysteryBase = require("../setKTK/TrailofMystery");

class TrailofMystery extends TrailofMysteryBase {
  constructor (game) {
    super(game, "Trail of Mystery", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = TrailofMystery;
