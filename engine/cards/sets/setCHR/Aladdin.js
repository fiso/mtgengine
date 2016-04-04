"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AladdinBase = require("../setARN/Aladdin.js");

class Aladdin extends AladdinBase {
  constructor(game) {
    super(game, "Aladdin", "Chronicles", "CHR");
  }
}

module.exports = Aladdin;
