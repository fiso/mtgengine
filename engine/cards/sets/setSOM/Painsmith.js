"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Painsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Painsmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Painsmith;
