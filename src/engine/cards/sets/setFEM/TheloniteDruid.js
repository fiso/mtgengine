"use strict";
const Constants = require ("../../../Constants");
const TheloniteDruidBase = require("../setME2/TheloniteDruid");

class TheloniteDruid extends TheloniteDruidBase {
  constructor (game) {
    super(game, "Thelonite Druid", "Fallen Empires", "FEM");
  }
}

module.exports = TheloniteDruid;
