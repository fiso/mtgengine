"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuramancersGuise extends Card {
  constructor(game) {
    super(game, "Auramancer's Guise", "Planar Chaos", "PLC");
  }
}

module.exports = AuramancersGuise;
