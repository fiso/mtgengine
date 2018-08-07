"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneoftheLiving extends UnimplementedCard {
  constructor (game) {
    super(game, "Bane of the Living", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BaneoftheLiving;
