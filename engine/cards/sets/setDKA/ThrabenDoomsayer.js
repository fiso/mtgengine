"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenDoomsayer extends Card {
  constructor(game) {
    super(game, "Thraben Doomsayer", "Dark Ascension", "DKA");
  }
}

module.exports = ThrabenDoomsayer;
