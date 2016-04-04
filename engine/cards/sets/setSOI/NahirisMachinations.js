"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NahirisMachinations extends Card {
  constructor(game) {
    super(game, "Nahiri's Machinations", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NahirisMachinations;
