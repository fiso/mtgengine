"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlorySeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Glory Seeker", "Welcome Deck 2017", "W17");
  }
}

module.exports = GlorySeeker;
