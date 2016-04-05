"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreetWraith extends UnimplementedCard {
  constructor(game) {
    super(game, "Street Wraith", "Future Sight", "FUT");
  }
}

module.exports = StreetWraith;
