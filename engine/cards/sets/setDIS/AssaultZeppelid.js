"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssaultZeppelid extends Card {
  constructor(game) {
    super(game, "Assault Zeppelid", "Dissension", "DIS");
  }
}

module.exports = AssaultZeppelid;
