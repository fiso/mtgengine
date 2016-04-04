"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PanopticMirror extends Card {
  constructor(game) {
    super(game, "Panoptic Mirror", "Darksteel", "DST");
  }
}

module.exports = PanopticMirror;
