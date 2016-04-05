"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiousEvangel extends UnimplementedCard {
  constructor(game) {
    super(game, "Pious Evangel", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PiousEvangel;
