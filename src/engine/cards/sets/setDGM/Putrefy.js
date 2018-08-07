"use strict";
const Constants = require ("../../../Constants");
const PutrefyBase = require("../setC18/Putrefy");

class Putrefy extends PutrefyBase {
  constructor (game) {
    super(game, "Putrefy", "Dragon's Maze", "DGM");
  }
}

module.exports = Putrefy;
