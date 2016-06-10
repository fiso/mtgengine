"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chaos extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos", "Apocalypse", "APC");
  }
}

module.exports = Chaos;
