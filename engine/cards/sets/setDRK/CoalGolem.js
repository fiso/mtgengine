"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoalGolemBase = require("../setME3/CoalGolem.js");

class CoalGolem extends CoalGolemBase {
  constructor(game) {
    super(game, "Coal Golem", "The Dark", "DRK");
  }
}

module.exports = CoalGolem;
