"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Avarax extends UnimplementedCard {
  constructor (game) {
    super(game, "Avarax", "Onslaught", "ONS");
  }
}

module.exports = Avarax;
