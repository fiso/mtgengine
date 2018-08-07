"use strict";
const Constants = require ("../../../Constants");
const HangarbackWalkerBase = require("../setMPS/HangarbackWalker");

class HangarbackWalker extends HangarbackWalkerBase {
  constructor (game) {
    super(game, "Hangarback Walker", "Magic Origins", "ORI");
  }
}

module.exports = HangarbackWalker;
