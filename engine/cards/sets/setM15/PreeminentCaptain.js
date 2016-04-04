"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreeminentCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Preeminent Captain", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PreeminentCaptain;
