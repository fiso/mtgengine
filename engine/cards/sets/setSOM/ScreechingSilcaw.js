"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingSilcaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Silcaw", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ScreechingSilcaw;
