"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManicScribe extends Card {
  constructor(game) {
    super(game, "Manic Scribe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ManicScribe;
