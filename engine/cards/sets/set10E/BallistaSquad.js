"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BallistaSquadBase = require("../setMMQ/BallistaSquad.js");

class BallistaSquad extends BallistaSquadBase {
  constructor(game) {
    super(game, "Ballista Squad", "Tenth Edition", "10E");
  }
}

module.exports = BallistaSquad;
