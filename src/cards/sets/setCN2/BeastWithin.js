"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setBBD/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor (game) {
    super(game, "Beast Within", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BeastWithin;
