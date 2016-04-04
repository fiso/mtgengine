"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RebukingCeremony extends Card {
  constructor(game) {
    super(game, "Rebuking Ceremony", "Darksteel", "DST");
  }
}

module.exports = RebukingCeremony;
