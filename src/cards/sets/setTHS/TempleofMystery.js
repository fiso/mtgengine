"use strict";
const Constants = require ("../../../Constants");
const TempleofMysteryBase = require("../setCPK/TempleofMystery");

class TempleofMystery extends TempleofMysteryBase {
  constructor (game) {
    super(game, "Temple of Mystery", "Theros", "THS");
  }
}

module.exports = TempleofMystery;
