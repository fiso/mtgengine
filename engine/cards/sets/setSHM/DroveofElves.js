"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DroveofElvesBase = require("../setC14/DroveofElves.js");

class DroveofElves extends DroveofElvesBase {
  constructor(game) {
    super(game, "Drove of Elves", "Shadowmoor", "SHM");
  }
}

module.exports = DroveofElves;
