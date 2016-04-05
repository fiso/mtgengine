"use strict";
const Constants = require ("../../../Constants");
const RevelationBase = require("../setCHR/Revelation");

class Revelation extends RevelationBase {
  constructor(game) {
    super(game, "Revelation", "Legends", "LEG");
  }
}

module.exports = Revelation;
