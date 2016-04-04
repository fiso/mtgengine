"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesPhantasmBase = require("../setDDM/JacesPhantasm.js");

class JacesPhantasm extends JacesPhantasmBase {
  constructor(game) {
    super(game, "Jace's Phantasm", "Magic 2013", "M13");
  }
}

module.exports = JacesPhantasm;
