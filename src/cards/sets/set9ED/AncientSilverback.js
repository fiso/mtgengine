"use strict";
const Constants = require ("../../../Constants");
const AncientSilverbackBase = require("../setM15/AncientSilverback");

class AncientSilverback extends AncientSilverbackBase {
  constructor (game) {
    super(game, "Ancient Silverback", "Ninth Edition", "9ED");
  }
}

module.exports = AncientSilverback;
