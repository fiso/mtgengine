"use strict";
const Constants = require ("../../../Constants");
const ObsianusGolemBase = require("../set6ED/ObsianusGolem");

class ObsianusGolem extends ObsianusGolemBase {
  constructor (game) {
    super(game, "Obsianus Golem", "Limited Edition Beta", "LEB");
  }
}

module.exports = ObsianusGolem;
