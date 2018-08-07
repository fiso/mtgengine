"use strict";
const Constants = require ("../../../Constants");
const ScionofUginBase = require("../setIMA/ScionofUgin");

class ScionofUgin extends ScionofUginBase {
  constructor (game) {
    super(game, "Scion of Ugin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ScionofUgin;
