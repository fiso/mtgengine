"use strict";
const Constants = require ("../../../Constants");
const HydraOmnivoreBase = require("../setC18/HydraOmnivore");

class HydraOmnivore extends HydraOmnivoreBase {
  constructor (game) {
    super(game, "Hydra Omnivore", "Commander 2011", "CMD");
  }
}

module.exports = HydraOmnivore;
