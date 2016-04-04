"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevelationBase = require("../setCHR/Revelation.js");

class Revelation extends RevelationBase {
  constructor(game) {
    super(game, "Revelation", "Legends", "LEG");
  }
}

module.exports = Revelation;
