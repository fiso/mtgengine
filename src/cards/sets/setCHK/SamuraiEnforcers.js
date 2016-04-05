"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamuraiEnforcers extends UnimplementedCard {
  constructor(game) {
    super(game, "Samurai Enforcers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SamuraiEnforcers;
