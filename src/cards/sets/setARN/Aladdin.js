"use strict";
const Constants = require ("../../../Constants");
const AladdinBase = require("../setME4/Aladdin");

class Aladdin extends AladdinBase {
  constructor (game) {
    super(game, "Aladdin", "Arabian Nights", "ARN");
  }
}

module.exports = Aladdin;
