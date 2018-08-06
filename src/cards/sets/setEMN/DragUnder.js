"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragUnder extends UnimplementedCard {
  constructor (game) {
    super(game, "Drag Under", "Eldritch Moon", "EMN");
  }
}

module.exports = DragUnder;
