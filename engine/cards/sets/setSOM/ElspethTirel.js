"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElspethTirel extends UnimplementedCard {
  constructor(game) {
    super(game, "Elspeth Tirel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ElspethTirel;
