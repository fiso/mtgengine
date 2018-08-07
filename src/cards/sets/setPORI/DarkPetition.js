"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkPetition extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Petition", "Magic Origins Promos", "PORI");
  }
}

module.exports = DarkPetition;
