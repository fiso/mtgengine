"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pentavus extends UnimplementedCard {
  constructor(game) {
    super(game, "Pentavus", "Commander 2014", "C14");
  }
}

module.exports = Pentavus;
