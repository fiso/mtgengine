"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PanopticMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Panoptic Mirror", "Darksteel", "DST");
  }
}

module.exports = PanopticMirror;
