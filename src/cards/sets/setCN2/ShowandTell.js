"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowandTell extends UnimplementedCard {
  constructor (game) {
    super(game, "Show and Tell", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ShowandTell;
