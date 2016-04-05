"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AsylumVisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Asylum Visitor", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AsylumVisitor;
