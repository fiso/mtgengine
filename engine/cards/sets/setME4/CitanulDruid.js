"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CitanulDruidBase = require("../setATQ/CitanulDruid.js");

class CitanulDruid extends CitanulDruidBase {
  constructor(game) {
    super(game, "Citanul Druid", "Masters Edition IV", "ME4");
  }
}

module.exports = CitanulDruid;
