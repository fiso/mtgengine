"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecrogenCenser extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrogen Censer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NecrogenCenser;
