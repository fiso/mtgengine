"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Banefire extends UnimplementedCard {
  constructor(game) {
    super(game, "Banefire", "Conflux", "CON");
  }
}

module.exports = Banefire;
