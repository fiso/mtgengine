"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScornfulEgotist extends UnimplementedCard {
  constructor(game) {
    super(game, "Scornful Egotist", "Scourge", "SCG");
  }
}

module.exports = ScornfulEgotist;
