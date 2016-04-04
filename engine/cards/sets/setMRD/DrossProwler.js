"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrossProwler extends Card {
  constructor(game) {
    super(game, "Dross Prowler", "Mirrodin", "MRD");
  }
}

module.exports = DrossProwler;
