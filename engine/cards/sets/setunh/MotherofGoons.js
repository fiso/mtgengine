"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MotherofGoons extends Card {
  constructor(game) {
    super(game, "Mother of Goons", "Unhinged", "UNH");
  }
}

module.exports = MotherofGoons;
