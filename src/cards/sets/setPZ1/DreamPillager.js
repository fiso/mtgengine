"use strict";
const Constants = require ("../../../Constants");
const DreamPillagerBase = require("../setCM2/DreamPillager");

class DreamPillager extends DreamPillagerBase {
  constructor (game) {
    super(game, "Dream Pillager", "Legendary Cube", "PZ1");
  }
}

module.exports = DreamPillager;
