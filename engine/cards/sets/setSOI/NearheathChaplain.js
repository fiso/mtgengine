"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NearheathChaplain extends Card {
  constructor(game) {
    super(game, "Nearheath Chaplain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NearheathChaplain;
