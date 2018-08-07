"use strict";
const Constants = require ("../../../Constants");
const ZurgoHelmsmasherBase = require("../setKTK/ZurgoHelmsmasher");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor (game) {
    super(game, "Zurgo Helmsmasher", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = ZurgoHelmsmasher;
