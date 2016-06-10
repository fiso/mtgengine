"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntingHymn extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunting Hymn", "Time Spiral", "TSP");
  }
}

module.exports = HauntingHymn;
