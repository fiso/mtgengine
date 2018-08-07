"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaraudingBoneslasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Marauding Boneslasher", "Hour of Devastation", "HOU");
  }
}

module.exports = MaraudingBoneslasher;
