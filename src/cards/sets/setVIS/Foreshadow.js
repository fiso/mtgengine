"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foreshadow extends UnimplementedCard {
  constructor(game) {
    super(game, "Foreshadow", "Visions", "VIS");
  }
}

module.exports = Foreshadow;
