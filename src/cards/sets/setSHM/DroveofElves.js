"use strict";
const Constants = require ("../../../Constants");
const DroveofElvesBase = require("../setC14/DroveofElves");

class DroveofElves extends DroveofElvesBase {
  constructor (game) {
    super(game, "Drove of Elves", "Shadowmoor", "SHM");
  }
}

module.exports = DroveofElves;
