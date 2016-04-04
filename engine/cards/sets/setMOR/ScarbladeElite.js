"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarbladeElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarblade Elite", "Morningtide", "MOR");
  }
}

module.exports = ScarbladeElite;
