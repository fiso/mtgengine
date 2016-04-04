"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingFumarole extends Card {
  constructor(game) {
    super(game, "Wandering Fumarole", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WanderingFumarole;
