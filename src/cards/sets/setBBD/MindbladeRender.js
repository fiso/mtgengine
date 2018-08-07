"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindbladeRender extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindblade Render", "Battlebond", "BBD");
  }
}

module.exports = MindbladeRender;
