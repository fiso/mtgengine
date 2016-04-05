"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisceraDragger extends UnimplementedCard {
  constructor(game) {
    super(game, "Viscera Dragger", "Shards of Alara", "ALA");
  }
}

module.exports = VisceraDragger;
