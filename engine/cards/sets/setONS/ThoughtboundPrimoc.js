"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtboundPrimoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Thoughtbound Primoc", "Onslaught", "ONS");
  }
}

module.exports = ThoughtboundPrimoc;
