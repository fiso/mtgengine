"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WellwisherBase = require("../setC14/Wellwisher.js");

class Wellwisher extends WellwisherBase {
  constructor(game) {
    super(game, "Wellwisher", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Wellwisher;
