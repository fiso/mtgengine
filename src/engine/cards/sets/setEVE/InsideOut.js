"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InsideOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Inside Out", "Eventide", "EVE");
  }
}

module.exports = InsideOut;
