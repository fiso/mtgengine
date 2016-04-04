"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallaxInhibitor extends Card {
  constructor(game) {
    super(game, "Parallax Inhibitor", "Nemesis", "NMS");
  }
}

module.exports = ParallaxInhibitor;
