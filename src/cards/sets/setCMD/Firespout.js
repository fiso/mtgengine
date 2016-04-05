"use strict";
const Constants = require ("../../../Constants");
const FirespoutBase = require("../setV14/Firespout");

class Firespout extends FirespoutBase {
  constructor(game) {
    super(game, "Firespout", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Firespout;
