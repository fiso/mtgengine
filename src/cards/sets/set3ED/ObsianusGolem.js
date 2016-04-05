"use strict";
const Constants = require ("../../../Constants");
const ObsianusGolemBase = require("../set6ED/ObsianusGolem");

class ObsianusGolem extends ObsianusGolemBase {
  constructor(game) {
    super(game, "Obsianus Golem", "Revised Edition", "3ED");
  }
}

module.exports = ObsianusGolem;
