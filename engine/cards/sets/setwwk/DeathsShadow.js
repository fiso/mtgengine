"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathsShadow extends Card {
  constructor(game) {
    super(game, "Death's Shadow", "Worldwake", "WWK");
  }
}

module.exports = DeathsShadow;
