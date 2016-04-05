"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Channel extends UnimplementedCard {
  constructor(game) {
    super(game, "Channel", "Collector's Edition", "CED");
  }
}

module.exports = Channel;
