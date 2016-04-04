"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CallforBlood extends Card {
  constructor(game) {
    super(game, "Call for Blood", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CallforBlood;
