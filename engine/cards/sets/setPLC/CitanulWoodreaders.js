"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CitanulWoodreadersBase = require("../setMMA/CitanulWoodreaders.js");

class CitanulWoodreaders extends CitanulWoodreadersBase {
  constructor(game) {
    super(game, "Citanul Woodreaders", "Planar Chaos", "PLC");
  }
}

module.exports = CitanulWoodreaders;
