"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CragPuca extends UnimplementedCard {
  constructor (game) {
    super(game, "Crag Puca", "Eventide", "EVE");
  }
}

module.exports = CragPuca;
