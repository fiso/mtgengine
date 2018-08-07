"use strict";
const Constants = require ("../../../Constants");
const DreamPillagerBase = require("../setCM2/DreamPillager");

class DreamPillager extends DreamPillagerBase {
  constructor (game) {
    super(game, "Dream Pillager", "Commander 2015", "C15");
  }
}

module.exports = DreamPillager;
