"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldScrounger extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlefield Scrounger", "Judgment", "JUD");
  }
}

module.exports = BattlefieldScrounger;
