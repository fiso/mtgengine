"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChilltotheBone extends UnimplementedCard {
  constructor (game) {
    super(game, "Chill to the Bone", "Coldsnap", "CSP");
  }
}

module.exports = ChilltotheBone;
