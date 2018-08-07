"use strict";
const Constants = require ("../../../Constants");
const IceCageBase = require("../setM12/IceCage");

class IceCage extends IceCageBase {
  constructor (game) {
    super(game, "Ice Cage", "Magic 2011", "M11");
  }
}

module.exports = IceCage;
