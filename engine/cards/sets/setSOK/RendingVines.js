"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RendingVines extends UnimplementedCard {
  constructor(game) {
    super(game, "Rending Vines", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RendingVines;
