"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnappingFangHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Snapping Fang Head", "Face the Hydra", "TFTH");
  }
}

module.exports = SnappingFangHead;
