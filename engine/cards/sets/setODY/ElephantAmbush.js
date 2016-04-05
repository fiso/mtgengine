"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantAmbush extends UnimplementedCard {
  constructor(game) {
    super(game, "Elephant Ambush", "Odyssey", "ODY");
  }
}

module.exports = ElephantAmbush;
