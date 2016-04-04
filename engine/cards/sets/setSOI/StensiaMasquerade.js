"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StensiaMasquerade extends Card {
  constructor(game) {
    super(game, "Stensia Masquerade", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StensiaMasquerade;
