"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleofMysteryBase = require("../setCPK/TempleofMystery.js");

class TempleofMystery extends TempleofMysteryBase {
  constructor(game) {
    super(game, "Temple of Mystery", "Theros", "THS");
  }
}

module.exports = TempleofMystery;
