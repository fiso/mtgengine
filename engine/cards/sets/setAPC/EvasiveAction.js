"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvasiveAction extends Card {
  constructor(game) {
    super(game, "Evasive Action", "Apocalypse", "APC");
  }
}

module.exports = EvasiveAction;
