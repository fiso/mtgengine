"use strict";
const Constants = require ("../../../Constants");
const ObsianusGolemBase = require("../setME4/ObsianusGolem");

class ObsianusGolem extends ObsianusGolemBase {
  constructor (game) {
    super(game, "Obsianus Golem", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ObsianusGolem;
