"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowandTell extends UnimplementedCard {
  constructor(game) {
    super(game, "Show and Tell", "Judge Gift Program", "pJGP");
  }
}

module.exports = ShowandTell;
