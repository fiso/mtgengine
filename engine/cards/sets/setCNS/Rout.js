"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoutBase = require("../setINV/Rout.js");

class Rout extends RoutBase {
  constructor(game) {
    super(game, "Rout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Rout;
