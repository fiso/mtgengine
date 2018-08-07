"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnistradChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Innistrad Checklist", "Innistrad Tokens", "TISD");
  }
}

module.exports = InnistradChecklist;
