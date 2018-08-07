"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolemArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Golem Artisan", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemArtisan;
