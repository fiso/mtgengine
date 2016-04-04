"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanGripBase = require("../setC13/KrosanGrip.js");

class KrosanGrip extends KrosanGripBase {
  constructor(game) {
    super(game, "Krosan Grip", "Modern Masters", "MMA");
  }
}

module.exports = KrosanGrip;
