"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrGalvanizer extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Galvanizer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrGalvanizer;
