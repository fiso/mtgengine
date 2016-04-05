"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soliton extends UnimplementedCard {
  constructor(game) {
    super(game, "Soliton", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Soliton;
