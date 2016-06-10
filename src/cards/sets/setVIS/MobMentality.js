"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MobMentality extends UnimplementedCard {
  constructor (game) {
    super(game, "Mob Mentality", "Visions", "VIS");
  }
}

module.exports = MobMentality;
