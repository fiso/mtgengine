"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandCemetery extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodland Cemetery", "Innistrad", "ISD");
  }
}

module.exports = WoodlandCemetery;
