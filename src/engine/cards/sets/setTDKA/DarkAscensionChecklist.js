"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkAscensionChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Ascension Checklist", "Dark Ascension Tokens", "TDKA");
  }
}

module.exports = DarkAscensionChecklist;
