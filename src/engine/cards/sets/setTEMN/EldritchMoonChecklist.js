"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldritchMoonChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldritch Moon Checklist", "Eldritch Moon Tokens", "TEMN");
  }
}

module.exports = EldritchMoonChecklist;
