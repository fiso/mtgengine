"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauthiMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauthi Marauder", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiMarauder;
