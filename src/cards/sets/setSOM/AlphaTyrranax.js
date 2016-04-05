"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaTyrranax extends UnimplementedCard {
  constructor(game) {
    super(game, "Alpha Tyrranax", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AlphaTyrranax;
