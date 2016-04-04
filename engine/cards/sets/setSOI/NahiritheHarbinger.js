"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NahiritheHarbinger extends Card {
  constructor(game) {
    super(game, "Nahiri, the Harbinger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NahiritheHarbinger;
