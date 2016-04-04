"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertSandstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Desert Sandstorm", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DesertSandstorm;
