"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrafdiggersCage extends Card {
  constructor(game) {
    super(game, "Grafdigger's Cage", "Dark Ascension", "DKA");
  }
}

module.exports = GrafdiggersCage;
