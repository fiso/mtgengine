"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HamletCaptain extends Card {
  constructor(game) {
    super(game, "Hamlet Captain", "Innistrad", "ISD");
  }
}

module.exports = HamletCaptain;
