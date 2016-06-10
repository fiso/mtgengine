"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoriaElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Scoria Elemental", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ScoriaElemental;
