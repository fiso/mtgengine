"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Captain", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AngelicCaptain;
