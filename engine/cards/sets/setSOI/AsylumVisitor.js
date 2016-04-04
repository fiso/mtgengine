"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AsylumVisitor extends Card {
  constructor(game) {
    super(game, "Asylum Visitor", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AsylumVisitor;
