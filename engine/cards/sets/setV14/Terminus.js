"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerminusBase = require("../setAVR/Terminus.js");

class Terminus extends TerminusBase {
  constructor(game) {
    super(game, "Terminus", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Terminus;
