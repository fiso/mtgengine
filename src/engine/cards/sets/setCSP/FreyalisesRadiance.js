"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreyalisesRadiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Freyalise's Radiance", "Coldsnap", "CSP");
  }
}

module.exports = FreyalisesRadiance;
