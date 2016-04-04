"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingTorch extends UnimplementedCard {
  constructor(game) {
    super(game, "Blazing Torch", "Innistrad", "ISD");
  }
}

module.exports = BlazingTorch;
