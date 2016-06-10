"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevourinFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Devour in Flames", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DevourinFlames;
