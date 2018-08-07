"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MouthFeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Mouth // Feed", "Amonkhet", "AKH");
  }
}

module.exports = MouthFeed;
