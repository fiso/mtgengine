"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KytheonHeroofAkros extends Card {
  constructor(game) {
    super(game, "Kytheon, Hero of Akros", "Magic Origins", "ORI");
  }
}

module.exports = KytheonHeroofAkros;
