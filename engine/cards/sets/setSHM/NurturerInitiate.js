"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NurturerInitiate extends Card {
  constructor(game) {
    super(game, "Nurturer Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = NurturerInitiate;
