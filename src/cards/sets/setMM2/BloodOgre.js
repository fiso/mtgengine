"use strict";
const Constants = require ("../../../Constants");
const BloodOgreBase = require("../setDDL/BloodOgre");

class BloodOgre extends BloodOgreBase {
  constructor (game) {
    super(game, "Blood Ogre", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BloodOgre;
