"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiousEvangel extends Card {
  constructor(game) {
    super(game, "Pious Evangel", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PiousEvangel;
