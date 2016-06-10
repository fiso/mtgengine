"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandWeald extends UnimplementedCard {
  constructor (game) {
    super(game, "Highland Weald", "Coldsnap", "CSP");
  }
}

module.exports = HighlandWeald;
