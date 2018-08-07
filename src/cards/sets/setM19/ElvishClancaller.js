"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishClancaller extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Clancaller", "Core Set 2019", "M19");
  }
}

module.exports = ElvishClancaller;
