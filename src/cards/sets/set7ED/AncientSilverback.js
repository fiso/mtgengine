"use strict";
const Constants = require ("../../../Constants");
const AncientSilverbackBase = require("../setM15/AncientSilverback");

class AncientSilverback extends AncientSilverbackBase {
  constructor (game) {
    super(game, "Ancient Silverback", "Seventh Edition", "7ED");
  }
}

module.exports = AncientSilverback;
