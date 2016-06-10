"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foresee extends UnimplementedCard {
  constructor (game) {
    super(game, "Foresee", "Future Sight", "FUT");
  }
}

module.exports = Foresee;
