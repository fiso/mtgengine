"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KytheonHeroofAkros extends UnimplementedCard {
  constructor(game) {
    super(game, "Kytheon, Hero of Akros", "Magic Origins", "ORI");
  }
}

module.exports = KytheonHeroofAkros;
