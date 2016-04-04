"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirkDrillSergeantBase = require("../setDD3_EVG/SkirkDrillSergeant.js");

class SkirkDrillSergeant extends SkirkDrillSergeantBase {
  constructor(game) {
    super(game, "Skirk Drill Sergeant", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = SkirkDrillSergeant;
