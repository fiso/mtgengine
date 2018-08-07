"use strict";
const Constants = require ("../../../Constants");
const WaketheReflectionsBase = require("../setMM3/WaketheReflections");

class WaketheReflections extends WaketheReflectionsBase {
  constructor (game) {
    super(game, "Wake the Reflections", "Dragon's Maze", "DGM");
  }
}

module.exports = WaketheReflections;
