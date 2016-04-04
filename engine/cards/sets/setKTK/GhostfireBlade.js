"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostfireBlade extends Card {
  constructor(game) {
    super(game, "Ghostfire Blade", "Khans of Tarkir", "KTK");
  }
}

module.exports = GhostfireBlade;
