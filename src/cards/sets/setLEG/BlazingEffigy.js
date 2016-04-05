"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingEffigy extends UnimplementedCard {
  constructor(game) {
    super(game, "Blazing Effigy", "Legends", "LEG");
  }
}

module.exports = BlazingEffigy;
