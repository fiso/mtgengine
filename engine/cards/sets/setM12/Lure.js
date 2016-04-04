"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LureBase = require("../setCHK/Lure.js");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Magic 2012", "M12");
  }
}

module.exports = Lure;
