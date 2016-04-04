"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObsianusGolemBase = require("../set6ED/ObsianusGolem.js");

class ObsianusGolem extends ObsianusGolemBase {
  constructor(game) {
    super(game, "Obsianus Golem", "Limited Edition Beta", "LEB");
  }
}

module.exports = ObsianusGolem;
