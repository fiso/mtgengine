"use strict";
const Constants = require ("../../../Constants");
const ZurgoHelmsmasherBase = require("../setKTK/ZurgoHelmsmasher");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor (game) {
    super(game, "Zurgo Helmsmasher", "Magic Online Promos", "PRM");
  }
}

module.exports = ZurgoHelmsmasher;
