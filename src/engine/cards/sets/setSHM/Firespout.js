"use strict";
const Constants = require ("../../../Constants");
const FirespoutBase = require("../setPZ1/Firespout");

class Firespout extends FirespoutBase {
  constructor (game) {
    super(game, "Firespout", "Shadowmoor", "SHM");
  }
}

module.exports = Firespout;
