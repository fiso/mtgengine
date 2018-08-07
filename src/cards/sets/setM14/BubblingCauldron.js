"use strict";
const Constants = require ("../../../Constants");
const BubblingCauldronBase = require("../setIMA/BubblingCauldron");

class BubblingCauldron extends BubblingCauldronBase {
  constructor (game) {
    super(game, "Bubbling Cauldron", "Magic 2014", "M14");
  }
}

module.exports = BubblingCauldron;
