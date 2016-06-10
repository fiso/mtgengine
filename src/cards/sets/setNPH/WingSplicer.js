"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = WingSplicer;
