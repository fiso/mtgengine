"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrGalvanizer extends Card {
  constructor(game) {
    super(game, "Myr Galvanizer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrGalvanizer;
