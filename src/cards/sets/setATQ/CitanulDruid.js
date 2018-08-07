"use strict";
const Constants = require ("../../../Constants");
const CitanulDruidBase = require("../setME4/CitanulDruid");

class CitanulDruid extends CitanulDruidBase {
  constructor (game) {
    super(game, "Citanul Druid", "Antiquities", "ATQ");
  }
}

module.exports = CitanulDruid;
