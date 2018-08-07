"use strict";
const Constants = require ("../../../Constants");
const SkirkDrillSergeantBase = require("../setEVG/SkirkDrillSergeant");

class SkirkDrillSergeant extends SkirkDrillSergeantBase {
  constructor (game) {
    super(game, "Skirk Drill Sergeant", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = SkirkDrillSergeant;
