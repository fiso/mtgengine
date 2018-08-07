"use strict";
const Constants = require ("../../../Constants");
const ActofHeroismBase = require("../setA25/ActofHeroism");

class ActofHeroism extends ActofHeroismBase {
  constructor (game) {
    super(game, "Act of Heroism", "Hour of Devastation", "HOU");
  }
}

module.exports = ActofHeroism;
