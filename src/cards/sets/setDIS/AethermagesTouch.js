"use strict";
const Constants = require ("../../../Constants");
const AethermagesTouchBase = require("../setC13/AethermagesTouch");

class AethermagesTouch extends AethermagesTouchBase {
  constructor (game) {
    super(game, "Æthermage's Touch", "Dissension", "DIS");
  }
}

module.exports = AethermagesTouch;
