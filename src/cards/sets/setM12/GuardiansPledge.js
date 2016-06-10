"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardiansPledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardians' Pledge", "Magic 2012", "M12");
  }
}

module.exports = GuardiansPledge;
