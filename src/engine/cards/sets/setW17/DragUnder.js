"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragUnder extends UnimplementedCard {
  constructor (game) {
    super(game, "Drag Under", "Welcome Deck 2017", "W17");
  }
}

module.exports = DragUnder;
