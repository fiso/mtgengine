"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Narcomoeba extends UnimplementedCard {
  constructor(game) {
    super(game, "Narcomoeba", "Future Sight", "FUT");
  }
}

module.exports = Narcomoeba;
