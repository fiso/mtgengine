"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecroticPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Necrotic Plague", "Magic 2011", "M11");
  }
}

module.exports = NecroticPlague;
