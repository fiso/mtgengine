"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimelyReinforcements extends UnimplementedCard {
  constructor (game) {
    super(game, "Timely Reinforcements", "Magic 2012", "M12");
  }
}

module.exports = TimelyReinforcements;
