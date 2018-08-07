"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmugglerCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Smuggler Captain", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SmugglerCaptain;
