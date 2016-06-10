"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nucklavee extends UnimplementedCard {
  constructor (game) {
    super(game, "Nucklavee", "Eventide", "EVE");
  }
}

module.exports = Nucklavee;
