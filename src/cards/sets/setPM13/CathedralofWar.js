"use strict";
const Constants = require ("../../../Constants");
const CathedralofWarBase = require("../setM13/CathedralofWar");

class CathedralofWar extends CathedralofWarBase {
  constructor (game) {
    super(game, "Cathedral of War", "Magic 2013 Promos", "PM13");
  }
}

module.exports = CathedralofWar;
