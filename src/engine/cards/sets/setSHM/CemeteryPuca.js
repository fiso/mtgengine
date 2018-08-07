"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryPuca extends UnimplementedCard {
  constructor (game) {
    super(game, "Cemetery Puca", "Shadowmoor", "SHM");
  }
}

module.exports = CemeteryPuca;
