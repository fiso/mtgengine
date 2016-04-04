"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InspirationBase = require("../set6ED/Inspiration.js");

class Inspiration extends InspirationBase {
  constructor(game) {
    super(game, "Inspiration", "Visions", "VIS");
  }
}

module.exports = Inspiration;
