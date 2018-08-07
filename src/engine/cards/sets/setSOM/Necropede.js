"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necropede extends UnimplementedCard {
  constructor (game) {
    super(game, "Necropede", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Necropede;
