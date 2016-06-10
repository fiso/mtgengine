"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallaxInhibitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Parallax Inhibitor", "Nemesis", "NMS");
  }
}

module.exports = ParallaxInhibitor;
