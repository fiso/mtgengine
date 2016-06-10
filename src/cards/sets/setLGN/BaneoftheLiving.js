"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneoftheLiving extends UnimplementedCard {
  constructor (game) {
    super(game, "Bane of the Living", "Legions", "LGN");
  }
}

module.exports = BaneoftheLiving;
