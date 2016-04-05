"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifesmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifesmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Lifesmith;
