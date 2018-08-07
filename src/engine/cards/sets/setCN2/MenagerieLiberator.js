"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MenagerieLiberator extends UnimplementedCard {
  constructor (game) {
    super(game, "Menagerie Liberator", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = MenagerieLiberator;
