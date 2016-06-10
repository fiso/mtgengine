"use strict";
const Constants = require ("../../../Constants");
const TheloniteDruidBase = require("../setFEM/TheloniteDruid");

class TheloniteDruid extends TheloniteDruidBase {
  constructor (game) {
    super(game, "Thelonite Druid", "Masters Edition II", "ME2");
  }
}

module.exports = TheloniteDruid;
