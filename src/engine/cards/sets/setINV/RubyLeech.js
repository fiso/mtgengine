"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RubyLeech extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruby Leech", "Invasion", "INV");
  }
}

module.exports = RubyLeech;
