"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnappingSailback extends UnimplementedCard {
  constructor (game) {
    super(game, "Snapping Sailback", "Ixalan", "XLN");
  }
}

module.exports = SnappingSailback;
