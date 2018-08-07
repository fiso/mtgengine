"use strict";
const Constants = require ("../../../Constants");
const DroveofElvesBase = require("../setCMA/DroveofElves");

class DroveofElves extends DroveofElvesBase {
  constructor (game) {
    super(game, "Drove of Elves", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DroveofElves;
