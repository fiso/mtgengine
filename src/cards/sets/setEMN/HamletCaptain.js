"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HamletCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Hamlet Captain", "Eldritch Moon", "EMN");
  }
}

module.exports = HamletCaptain;
