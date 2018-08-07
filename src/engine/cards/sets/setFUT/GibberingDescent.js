"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GibberingDescent extends UnimplementedCard {
  constructor (game) {
    super(game, "Gibbering Descent", "Future Sight", "FUT");
  }
}

module.exports = GibberingDescent;
