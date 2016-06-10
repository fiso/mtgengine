"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeGouge extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye Gouge", "Born of the Gods", "BNG");
  }
}

module.exports = EyeGouge;
