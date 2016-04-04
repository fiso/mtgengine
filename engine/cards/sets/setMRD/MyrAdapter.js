"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrAdapter extends Card {
  constructor(game) {
    super(game, "Myr Adapter", "Mirrodin", "MRD");
  }
}

module.exports = MyrAdapter;
