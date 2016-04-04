"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PersonalSanctuary extends Card {
  constructor(game) {
    super(game, "Personal Sanctuary", "Magic 2012", "M12");
  }
}

module.exports = PersonalSanctuary;
