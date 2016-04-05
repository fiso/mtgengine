"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BonebreakerGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Bonebreaker Giant", "Magic 2012", "M12");
  }
}

module.exports = BonebreakerGiant;
