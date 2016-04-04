"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheloniteDruidBase = require("../setFEM/TheloniteDruid.js");

class TheloniteDruid extends TheloniteDruidBase {
  constructor(game) {
    super(game, "Thelonite Druid", "Masters Edition II", "ME2");
  }
}

module.exports = TheloniteDruid;
