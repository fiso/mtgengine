"use strict";
const Constants = require ("../../../Constants");
const DarkPetitionBase = require("../setPORI/DarkPetition");

class DarkPetition extends DarkPetitionBase {
  constructor (game) {
    super(game, "Dark Petition", "Magic Origins", "ORI");
  }
}

module.exports = DarkPetition;
