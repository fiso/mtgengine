"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuminarchAscension extends UnimplementedCard {
  constructor(game) {
    super(game, "Luminarch Ascension", "Zendikar", "ZEN");
  }
}

module.exports = LuminarchAscension;
