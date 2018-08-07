"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flight extends UnimplementedCard {
  constructor (game) {
    super(game, "Flight", "Magic 2012", "M12");
  }
}

module.exports = Flight;
