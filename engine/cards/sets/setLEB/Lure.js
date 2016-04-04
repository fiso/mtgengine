"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LureBase = require("../setCHK/Lure.js");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lure;
