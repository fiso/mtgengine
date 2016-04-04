"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninElder extends Card {
  constructor(game) {
    super(game, "Leonin Elder", "Mirrodin", "MRD");
  }
}

module.exports = LeoninElder;
