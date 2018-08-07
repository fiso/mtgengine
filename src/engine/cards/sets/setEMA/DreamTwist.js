"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamTwist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Twist", "Eternal Masters", "EMA");
  }
}

module.exports = DreamTwist;
