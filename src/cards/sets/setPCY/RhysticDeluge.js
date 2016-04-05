"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticDeluge extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Deluge", "Prophecy", "PCY");
  }
}

module.exports = RhysticDeluge;
