"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason.js");

class ActofTreason extends ActofTreasonBase {
  constructor(game) {
    super(game, "Act of Treason", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ActofTreason;
