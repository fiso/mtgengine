"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeshiftMannequin extends UnimplementedCard {
  constructor(game) {
    super(game, "Makeshift Mannequin", "Archenemy", "ARC");
  }
}

module.exports = MakeshiftMannequin;
