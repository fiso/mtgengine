"use strict";
const Constants = require ("../../../Constants");
const CrucibleofFireBase = require("../setIMA/CrucibleofFire");

class CrucibleofFire extends CrucibleofFireBase {
  constructor (game) {
    super(game, "Crucible of Fire", "Magic 2015", "M15");
  }
}

module.exports = CrucibleofFire;
