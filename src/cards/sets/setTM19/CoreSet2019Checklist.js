"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoreSet2019Checklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Core Set 2019 Checklist", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = CoreSet2019Checklist;
