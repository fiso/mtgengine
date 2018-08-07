"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Splicer", "Modern Masters 2017", "MM3");
  }
}

module.exports = WingSplicer;
