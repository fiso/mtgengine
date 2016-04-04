"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnlistmentOfficer extends Card {
  constructor(game) {
    super(game, "Enlistment Officer", "Apocalypse", "APC");
  }
}

module.exports = EnlistmentOfficer;
