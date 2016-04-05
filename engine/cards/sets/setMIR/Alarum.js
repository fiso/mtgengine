"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Alarum extends UnimplementedCard {
  constructor(game) {
    super(game, "Alarum", "Mirage", "MIR");
  }
}

module.exports = Alarum;
