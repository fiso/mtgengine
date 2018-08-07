"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RivalsofIxalanChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Rivals of Ixalan Checklist", "Rivals of Ixalan Tokens", "TRIX");
  }
}

module.exports = RivalsofIxalanChecklist;
