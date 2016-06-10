"use strict";
const Constants = require ("../../../Constants");
const CitanulWoodreadersBase = require("../setMMA/CitanulWoodreaders");

class CitanulWoodreaders extends CitanulWoodreadersBase {
  constructor (game) {
    super(game, "Citanul Woodreaders", "Planar Chaos", "PLC");
  }
}

module.exports = CitanulWoodreaders;
