"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MobMentality extends Card {
  constructor(game) {
    super(game, "Mob Mentality", "Visions", "VIS");
  }
}

module.exports = MobMentality;
