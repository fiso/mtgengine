"use strict";
const Constants = require ("../../../Constants");
const GlimmervoidBase = require("../setMMA/Glimmervoid");

class Glimmervoid extends GlimmervoidBase {
  constructor (game) {
    super(game, "Glimmervoid", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Glimmervoid;
