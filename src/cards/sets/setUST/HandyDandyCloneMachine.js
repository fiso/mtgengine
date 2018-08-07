"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandyDandyCloneMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Handy Dandy Clone Machine", "Unstable", "UST");
  }
}

module.exports = HandyDandyCloneMachine;
