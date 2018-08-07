"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallforBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Call for Blood", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CallforBlood;
