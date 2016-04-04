"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuramancersGuise extends UnimplementedCard {
  constructor(game) {
    super(game, "Auramancer's Guise", "Planar Chaos", "PLC");
  }
}

module.exports = AuramancersGuise;
