"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhalmasWarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghalma's Warden", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GhalmasWarden;
