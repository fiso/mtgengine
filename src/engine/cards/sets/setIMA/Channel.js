"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Channel extends UnimplementedCard {
  constructor (game) {
    super(game, "Channel", "Iconic Masters", "IMA");
  }
}

module.exports = Channel;
