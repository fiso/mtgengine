"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exsanguinate extends UnimplementedCard {
  constructor(game) {
    super(game, "Exsanguinate", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Exsanguinate;
