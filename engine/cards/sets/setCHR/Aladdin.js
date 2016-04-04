"use strict";
const Constants = require ("../../../Constants");
const AladdinBase = require("../setARN/Aladdin");

class Aladdin extends AladdinBase {
  constructor(game) {
    super(game, "Aladdin", "Chronicles", "CHR");
  }
}

module.exports = Aladdin;
