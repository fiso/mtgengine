"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LilianasIndignation extends Card {
  constructor(game) {
    super(game, "Liliana's Indignation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = LilianasIndignation;
