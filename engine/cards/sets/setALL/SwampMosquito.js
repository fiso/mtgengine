"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwampMosquito extends UnimplementedCard {
  constructor(game) {
    super(game, "Swamp Mosquito", "Alliances", "ALL");
  }
}

module.exports = SwampMosquito;
