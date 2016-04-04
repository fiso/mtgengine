"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisdainfulStrokeBase = require("../setpFNM/DisdainfulStroke.js");

class DisdainfulStroke extends DisdainfulStrokeBase {
  constructor(game) {
    super(game, "Disdainful Stroke", "Khans of Tarkir", "KTK");
  }
}

module.exports = DisdainfulStroke;
