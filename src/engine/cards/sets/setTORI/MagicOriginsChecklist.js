"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagicOriginsChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Magic Origins Checklist", "Magic Origins Tokens", "TORI");
  }
}

module.exports = MagicOriginsChecklist;
