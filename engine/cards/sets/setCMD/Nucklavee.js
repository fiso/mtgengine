"use strict";
const Constants = require ("../../../Constants");
const NucklaveeBase = require("../setEVE/Nucklavee");

class Nucklavee extends NucklaveeBase {
  constructor(game) {
    super(game, "Nucklavee", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Nucklavee;
