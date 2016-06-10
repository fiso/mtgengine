"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undo extends UnimplementedCard {
  constructor (game) {
    super(game, "Undo", "Portal Second Age", "PO2");
  }
}

module.exports = Undo;
