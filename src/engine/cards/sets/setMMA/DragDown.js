"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Drag Down", "Modern Masters", "MMA");
  }
}

module.exports = DragDown;
