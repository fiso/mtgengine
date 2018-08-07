"use strict";
const Constants = require ("../../../Constants");
const InspirationBase = require("../setW17/Inspiration");

class Inspiration extends InspirationBase {
  constructor (game) {
    super(game, "Inspiration", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inspiration;
