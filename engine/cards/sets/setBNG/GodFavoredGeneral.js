"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodFavoredGeneral extends UnimplementedCard {
  constructor(game) {
    super(game, "God-Favored General", "Born of the Gods", "BNG");
  }
}

module.exports = GodFavoredGeneral;
