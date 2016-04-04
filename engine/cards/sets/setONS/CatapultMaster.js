"use strict";
const Constants = require ("../../../Constants");
const CatapultMasterBase = require("../setDDF/CatapultMaster");

class CatapultMaster extends CatapultMasterBase {
  constructor(game) {
    super(game, "Catapult Master", "Onslaught", "ONS");
  }
}

module.exports = CatapultMaster;
