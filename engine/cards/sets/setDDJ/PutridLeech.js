"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PutridLeechBase = require("../setARB/PutridLeech.js");

class PutridLeech extends PutridLeechBase {
  constructor(game) {
    super(game, "Putrid Leech", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PutridLeech;
