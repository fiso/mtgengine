"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CradletoGrave extends UnimplementedCard {
  constructor(game) {
    super(game, "Cradle to Grave", "Planar Chaos", "PLC");
  }
}

module.exports = CradletoGrave;
