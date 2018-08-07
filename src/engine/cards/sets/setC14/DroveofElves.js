"use strict";
const Constants = require ("../../../Constants");
const DroveofElvesBase = require("../setCMA/DroveofElves");

class DroveofElves extends DroveofElvesBase {
  constructor (game) {
    super(game, "Drove of Elves", "Commander 2014", "C14");
  }
}

module.exports = DroveofElves;
