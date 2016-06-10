"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riddlesmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Riddlesmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Riddlesmith;
