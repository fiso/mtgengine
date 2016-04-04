"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhitemaneLion extends Card {
  constructor(game) {
    super(game, "Whitemane Lion", "Commander 2014", "C14");
  }
}

module.exports = WhitemaneLion;
