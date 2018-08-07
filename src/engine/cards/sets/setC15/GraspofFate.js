"use strict";
const Constants = require ("../../../Constants");
const GraspofFateBase = require("../setPZ1/GraspofFate");

class GraspofFate extends GraspofFateBase {
  constructor (game) {
    super(game, "Grasp of Fate", "Commander 2015", "C15");
  }
}

module.exports = GraspofFate;
