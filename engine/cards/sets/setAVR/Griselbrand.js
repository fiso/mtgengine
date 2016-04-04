"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Griselbrand extends Card {
  constructor(game) {
    super(game, "Griselbrand", "Avacyn Restored", "AVR");
  }
}

module.exports = Griselbrand;
