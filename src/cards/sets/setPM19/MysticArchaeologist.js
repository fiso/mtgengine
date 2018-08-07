"use strict";
const Constants = require ("../../../Constants");
const MysticArchaeologistBase = require("../setM19/MysticArchaeologist");

class MysticArchaeologist extends MysticArchaeologistBase {
  constructor (game) {
    super(game, "Mystic Archaeologist", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = MysticArchaeologist;
