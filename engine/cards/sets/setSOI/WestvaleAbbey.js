"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WestvaleAbbey extends Card {
  constructor(game) {
    super(game, "Westvale Abbey", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WestvaleAbbey;
