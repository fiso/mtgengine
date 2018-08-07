"use strict";
const Constants = require ("../../../Constants");
const TempleofMysteryBase = require("../setCP1/TempleofMystery");

class TempleofMystery extends TempleofMysteryBase {
  constructor (game) {
    super(game, "Temple of Mystery", "Magic Online Promos", "PRM");
  }
}

module.exports = TempleofMystery;
