"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkDrillSergeant extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirk Drill Sergeant", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkDrillSergeant;
