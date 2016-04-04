"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonstormBase = require("../setDRB/Dragonstorm.js");

class Dragonstorm extends DragonstormBase {
  constructor(game) {
    super(game, "Dragonstorm", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Dragonstorm;
