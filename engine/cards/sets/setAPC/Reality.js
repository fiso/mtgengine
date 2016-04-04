"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reality extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality", "Apocalypse", "APC");
  }
}

module.exports = Reality;
