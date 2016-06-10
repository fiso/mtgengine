"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HamletCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Hamlet Captain", "Innistrad", "ISD");
  }
}

module.exports = HamletCaptain;
