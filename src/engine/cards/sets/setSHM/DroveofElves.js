"use strict";
const Constants = require ("../../../Constants");
const DroveofElvesBase = require("../setCMA/DroveofElves");

class DroveofElves extends DroveofElvesBase {
  constructor (game) {
    super(game, "Drove of Elves", "Shadowmoor", "SHM");
  }
}

module.exports = DroveofElves;
