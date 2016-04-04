"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConfronttheUnknown extends Card {
  constructor(game) {
    super(game, "Confront the Unknown", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConfronttheUnknown;
