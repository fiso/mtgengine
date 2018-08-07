"use strict";
const Constants = require ("../../../Constants");
const IntuitionBase = require("../setTPR/Intuition");

class Intuition extends IntuitionBase {
  constructor (game) {
    super(game, "Intuition", "Judge Gift Cards 2003", "G03");
  }
}

module.exports = Intuition;
