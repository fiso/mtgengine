"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ICallontheAncientMagics extends UnimplementedCard {
  constructor(game) {
    super(game, "I Call on the Ancient Magics", "Archenemy", "ARC");
  }
}

module.exports = ICallontheAncientMagics;
