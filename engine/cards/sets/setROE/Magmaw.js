"use strict";
const Constants = require ("../../../Constants");
const MagmawBase = require("../setDDP/Magmaw");

class Magmaw extends MagmawBase {
  constructor(game) {
    super(game, "Magmaw", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Magmaw;
