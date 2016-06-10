"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Illusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusion", "Apocalypse", "APC");
  }
}

module.exports = Illusion;
