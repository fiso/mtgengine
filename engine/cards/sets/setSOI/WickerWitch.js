"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WickerWitch extends Card {
  constructor(game) {
    super(game, "Wicker Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WickerWitch;
