"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NephaliaSeakiteBase = require("../setDKA/NephaliaSeakite.js");

class NephaliaSeakite extends NephaliaSeakiteBase {
  constructor(game) {
    super(game, "Nephalia Seakite", "Magic 2014 Core Set", "M14");
  }
}

module.exports = NephaliaSeakite;
