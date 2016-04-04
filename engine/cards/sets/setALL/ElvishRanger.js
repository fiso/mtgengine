"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Ranger", "Alliances", "ALL");
  }
}

module.exports = ElvishRanger;
