"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedPlateMail extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Plate Mail", "Magic 2014 Core Set", "M14");
  }
}

module.exports = HauntedPlateMail;
