"use strict";
const Constants = require ("../../../Constants");
const BloodOgreBase = require("../setDDL/BloodOgre");

class BloodOgre extends BloodOgreBase {
  constructor (game) {
    super(game, "Blood Ogre", "Magic 2012", "M12");
  }
}

module.exports = BloodOgre;
