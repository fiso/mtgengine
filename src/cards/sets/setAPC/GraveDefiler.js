"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveDefiler extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave Defiler", "Apocalypse", "APC");
  }
}

module.exports = GraveDefiler;
