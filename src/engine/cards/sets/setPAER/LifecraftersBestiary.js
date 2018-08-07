"use strict";
const Constants = require ("../../../Constants");
const LifecraftersBestiaryBase = require("../setAER/LifecraftersBestiary");

class LifecraftersBestiary extends LifecraftersBestiaryBase {
  constructor (game) {
    super(game, "Lifecrafter's Bestiary", "Aether Revolt Promos", "PAER");
  }
}

module.exports = LifecraftersBestiary;
