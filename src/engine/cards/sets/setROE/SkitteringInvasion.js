"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringInvasion extends UnimplementedCard {
  constructor (game) {
    super(game, "Skittering Invasion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SkitteringInvasion;
