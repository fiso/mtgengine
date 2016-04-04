"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreneticEfreet extends UnimplementedCard {
  constructor(game) {
    super(game, "Frenetic Efreet", "Mirage", "MIR");
  }
}

module.exports = FreneticEfreet;
