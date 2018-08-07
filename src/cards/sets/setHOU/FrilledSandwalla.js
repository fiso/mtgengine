"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrilledSandwalla extends UnimplementedCard {
  constructor (game) {
    super(game, "Frilled Sandwalla", "Hour of Devastation", "HOU");
  }
}

module.exports = FrilledSandwalla;
