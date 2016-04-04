"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlefieldScrounger extends Card {
  constructor(game) {
    super(game, "Battlefield Scrounger", "Judgment", "JUD");
  }
}

module.exports = BattlefieldScrounger;
