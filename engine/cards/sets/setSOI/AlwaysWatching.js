"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlwaysWatching extends Card {
  constructor(game) {
    super(game, "Always Watching", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AlwaysWatching;
