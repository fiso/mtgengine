"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tombstalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Tombstalker", "Modern Masters", "MMA");
  }
}

module.exports = Tombstalker;
