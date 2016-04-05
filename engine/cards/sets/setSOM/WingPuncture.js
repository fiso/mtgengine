"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingPuncture extends UnimplementedCard {
  constructor(game) {
    super(game, "Wing Puncture", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WingPuncture;
