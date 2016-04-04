"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BonebreakerGiant extends Card {
  constructor(game) {
    super(game, "Bonebreaker Giant", "Magic 2012", "M12");
  }
}

module.exports = BonebreakerGiant;
