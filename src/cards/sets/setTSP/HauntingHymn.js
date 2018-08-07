"use strict";
const Constants = require ("../../../Constants");
const HauntingHymnBase = require("../setIMA/HauntingHymn");

class HauntingHymn extends HauntingHymnBase {
  constructor (game) {
    super(game, "Haunting Hymn", "Time Spiral", "TSP");
  }
}

module.exports = HauntingHymn;
