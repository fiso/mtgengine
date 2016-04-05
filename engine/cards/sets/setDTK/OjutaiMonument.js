"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OjutaiMonument extends UnimplementedCard {
  constructor(game) {
    super(game, "Ojutai Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaiMonument;
