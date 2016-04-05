"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Serra Angel", "Anthologies", "ATH");
  }
}

module.exports = SerraAngel;
