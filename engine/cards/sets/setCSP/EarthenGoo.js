"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarthenGoo extends Card {
  constructor(game) {
    super(game, "Earthen Goo", "Coldsnap", "CSP");
  }
}

module.exports = EarthenGoo;
