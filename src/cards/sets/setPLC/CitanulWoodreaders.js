"use strict";
const Constants = require ("../../../Constants");
const CitanulWoodreadersBase = require("../setDDR/CitanulWoodreaders");

class CitanulWoodreaders extends CitanulWoodreadersBase {
  constructor (game) {
    super(game, "Citanul Woodreaders", "Planar Chaos", "PLC");
  }
}

module.exports = CitanulWoodreaders;
