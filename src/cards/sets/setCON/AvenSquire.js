"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Squire", "Conflux", "CON");
  }
}

module.exports = AvenSquire;
