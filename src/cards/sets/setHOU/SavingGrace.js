"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavingGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Saving Grace", "Hour of Devastation", "HOU");
  }
}

module.exports = SavingGrace;
