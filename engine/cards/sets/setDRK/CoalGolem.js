"use strict";
const Constants = require ("../../../Constants");
const CoalGolemBase = require("../setME3/CoalGolem");

class CoalGolem extends CoalGolemBase {
  constructor(game) {
    super(game, "Coal Golem", "The Dark", "DRK");
  }
}

module.exports = CoalGolem;
