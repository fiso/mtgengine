"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyHippo extends UnimplementedCard {
  constructor(game) {
    super(game, "Pygmy Hippo", "Visions", "VIS");
  }
}

module.exports = PygmyHippo;
