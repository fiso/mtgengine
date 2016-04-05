"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranWarleader extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Warleader", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VeteranWarleader;
