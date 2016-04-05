"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Embersmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Embersmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Embersmith;
