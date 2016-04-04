"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastLaugh extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Laugh", "Torment", "TOR");
  }
}

module.exports = LastLaugh;
