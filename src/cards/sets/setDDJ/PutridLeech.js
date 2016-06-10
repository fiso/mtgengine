"use strict";
const Constants = require ("../../../Constants");
const PutridLeechBase = require("../setARB/PutridLeech");

class PutridLeech extends PutridLeechBase {
  constructor (game) {
    super(game, "Putrid Leech", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PutridLeech;
