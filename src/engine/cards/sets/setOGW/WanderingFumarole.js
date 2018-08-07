"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingFumarole extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Fumarole", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WanderingFumarole;
