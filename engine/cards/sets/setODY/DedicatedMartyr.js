"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DedicatedMartyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Dedicated Martyr", "Odyssey", "ODY");
  }
}

module.exports = DedicatedMartyr;
