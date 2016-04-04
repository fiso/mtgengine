"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecratorHag extends UnimplementedCard {
  constructor(game) {
    super(game, "Desecrator Hag", "Eventide", "EVE");
  }
}

module.exports = DesecratorHag;
