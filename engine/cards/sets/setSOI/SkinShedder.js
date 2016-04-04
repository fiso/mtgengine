"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkinShedder extends Card {
  constructor(game) {
    super(game, "Skin Shedder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkinShedder;
