"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KathariRemnant extends UnimplementedCard {
  constructor(game) {
    super(game, "Kathari Remnant", "Alara Reborn", "ARB");
  }
}

module.exports = KathariRemnant;
