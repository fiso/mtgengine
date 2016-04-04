"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MichikoKondaTruthSeeker extends Card {
  constructor(game) {
    super(game, "Michiko Konda, Truth Seeker", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MichikoKondaTruthSeeker;
