"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatapultMasterBase = require("../setDDF/CatapultMaster.js");

class CatapultMaster extends CatapultMasterBase {
  constructor(game) {
    super(game, "Catapult Master", "Onslaught", "ONS");
  }
}

module.exports = CatapultMaster;
