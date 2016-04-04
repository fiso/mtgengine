"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirefrightMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Firefright Mage", "Planar Chaos", "PLC");
  }
}

module.exports = FirefrightMage;
