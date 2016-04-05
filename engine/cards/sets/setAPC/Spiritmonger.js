"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spiritmonger extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiritmonger", "Apocalypse", "APC");
  }
}

module.exports = Spiritmonger;
