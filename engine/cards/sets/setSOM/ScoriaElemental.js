"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScoriaElemental extends Card {
  constructor(game) {
    super(game, "Scoria Elemental", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ScoriaElemental;
