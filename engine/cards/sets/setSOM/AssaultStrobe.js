"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultStrobe extends UnimplementedCard {
  constructor(game) {
    super(game, "Assault Strobe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AssaultStrobe;
