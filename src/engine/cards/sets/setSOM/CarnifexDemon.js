"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnifexDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnifex Demon", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarnifexDemon;
