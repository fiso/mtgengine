"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NucklaveeBase = require("../setEVE/Nucklavee.js");

class Nucklavee extends NucklaveeBase {
  constructor(game) {
    super(game, "Nucklavee", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Nucklavee;
