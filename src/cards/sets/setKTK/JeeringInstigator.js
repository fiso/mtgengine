"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeeringInstigator extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeering Instigator", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeeringInstigator;
