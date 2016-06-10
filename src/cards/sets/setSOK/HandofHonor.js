"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofHonor extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of Honor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HandofHonor;
