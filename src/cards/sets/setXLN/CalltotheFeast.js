"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltotheFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to the Feast", "Ixalan", "XLN");
  }
}

module.exports = CalltotheFeast;
