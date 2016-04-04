"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LichBase = require("../setCED/Lich.js");

class Lich extends LichBase {
  constructor(game) {
    super(game, "Lich", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lich;
