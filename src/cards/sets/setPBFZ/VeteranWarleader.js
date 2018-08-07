"use strict";
const Constants = require ("../../../Constants");
const VeteranWarleaderBase = require("../setBFZ/VeteranWarleader");

class VeteranWarleader extends VeteranWarleaderBase {
  constructor (game) {
    super(game, "Veteran Warleader", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = VeteranWarleader;
