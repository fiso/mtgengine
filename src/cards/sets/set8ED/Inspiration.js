"use strict";
const Constants = require ("../../../Constants");
const InspirationBase = require("../set6ED/Inspiration");

class Inspiration extends InspirationBase {
  constructor(game) {
    super(game, "Inspiration", "Eighth Edition", "8ED");
  }
}

module.exports = Inspiration;
