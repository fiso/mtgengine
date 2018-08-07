"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterfulNinja extends UnimplementedCard {
  constructor (game) {
    super(game, "Masterful Ninja", "Unstable", "UST");
  }
}

module.exports = MasterfulNinja;
