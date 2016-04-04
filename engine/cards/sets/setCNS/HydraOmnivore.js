"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HydraOmnivoreBase = require("../setCMD/HydraOmnivore.js");

class HydraOmnivore extends HydraOmnivoreBase {
  constructor(game) {
    super(game, "Hydra Omnivore", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HydraOmnivore;
