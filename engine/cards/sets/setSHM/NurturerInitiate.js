"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NurturerInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Nurturer Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = NurturerInitiate;
