"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigilfortheLost extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigil for the Lost", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VigilfortheLost;
