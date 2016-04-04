"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShiftingSkyBase = require("../set8ED/ShiftingSky.js");

class ShiftingSky extends ShiftingSkyBase {
  constructor(game) {
    super(game, "Shifting Sky", "Planeshift", "PLS");
  }
}

module.exports = ShiftingSky;
