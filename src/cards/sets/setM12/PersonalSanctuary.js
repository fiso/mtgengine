"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersonalSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Personal Sanctuary", "Magic 2012", "M12");
  }
}

module.exports = PersonalSanctuary;
