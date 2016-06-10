"use strict";
const Constants = require ("../../../Constants");
const IceCageBase = require("../setM10/IceCage");

class IceCage extends IceCageBase {
  constructor (game) {
    super(game, "Ice Cage", "Magic 2012", "M12");
  }
}

module.exports = IceCage;
