"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Jester's Scepter", "Coldsnap", "CSP");
  }
}

module.exports = JestersScepter;
