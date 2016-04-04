"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolemArtisan extends Card {
  constructor(game) {
    super(game, "Golem Artisan", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemArtisan;
