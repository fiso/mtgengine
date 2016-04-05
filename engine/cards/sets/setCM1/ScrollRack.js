"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrollRack extends UnimplementedCard {
  constructor(game) {
    super(game, "Scroll Rack", "Commander's Arsenal", "CM1");
  }
}

module.exports = ScrollRack;
