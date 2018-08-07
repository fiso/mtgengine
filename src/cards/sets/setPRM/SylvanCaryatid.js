"use strict";
const Constants = require ("../../../Constants");
const SylvanCaryatidBase = require("../setTHS/SylvanCaryatid");

class SylvanCaryatid extends SylvanCaryatidBase {
  constructor (game) {
    super(game, "Sylvan Caryatid", "Magic Online Promos", "PRM");
  }
}

module.exports = SylvanCaryatid;
