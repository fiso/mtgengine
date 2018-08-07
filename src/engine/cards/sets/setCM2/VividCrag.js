"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VividCrag extends UnimplementedCard {
  constructor (game) {
    super(game, "Vivid Crag", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = VividCrag;
