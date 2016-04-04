"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodOgreBase = require("../setDDL/BloodOgre.js");

class BloodOgre extends BloodOgreBase {
  constructor(game) {
    super(game, "Blood Ogre", "Magic 2012", "M12");
  }
}

module.exports = BloodOgre;
