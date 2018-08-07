"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianSnowcrusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Snowcrusher", "Coldsnap", "CSP");
  }
}

module.exports = PhyrexianSnowcrusher;
