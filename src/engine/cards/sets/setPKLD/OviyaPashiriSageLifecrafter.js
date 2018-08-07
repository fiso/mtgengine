"use strict";
const Constants = require ("../../../Constants");
const OviyaPashiriSageLifecrafterBase = require("../setKLD/OviyaPashiriSageLifecrafter");

class OviyaPashiriSageLifecrafter extends OviyaPashiriSageLifecrafterBase {
  constructor (game) {
    super(game, "Oviya Pashiri, Sage Lifecrafter", "Kaladesh Promos", "PKLD");
  }
}

module.exports = OviyaPashiriSageLifecrafter;
