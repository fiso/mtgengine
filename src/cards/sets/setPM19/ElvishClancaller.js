"use strict";
const Constants = require ("../../../Constants");
const ElvishClancallerBase = require("../setM19/ElvishClancaller");

class ElvishClancaller extends ElvishClancallerBase {
  constructor (game) {
    super(game, "Elvish Clancaller", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ElvishClancaller;
