"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadDefiler extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Defiler", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DreadDefiler;
