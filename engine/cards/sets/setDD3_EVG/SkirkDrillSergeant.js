"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirkDrillSergeant extends Card {
  constructor(game) {
    super(game, "Skirk Drill Sergeant", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkDrillSergeant;
