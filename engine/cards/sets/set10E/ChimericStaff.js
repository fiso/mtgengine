"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChimericStaff extends Card {
  constructor(game) {
    super(game, "Chimeric Staff", "Tenth Edition", "10E");
  }
}

module.exports = ChimericStaff;
