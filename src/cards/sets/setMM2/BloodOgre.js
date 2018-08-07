"use strict";
const Constants = require ("../../../Constants");
const BloodOgreBase = require("../setE01/BloodOgre");

class BloodOgre extends BloodOgreBase {
  constructor (game) {
    super(game, "Blood Ogre", "Modern Masters 2015", "MM2");
  }
}

module.exports = BloodOgre;
