"use strict";
const Constants = require ("../../../Constants");
const VampireBatsBase = require("../setDD3_GVL/VampireBats");

class VampireBats extends VampireBatsBase {
  constructor (game) {
    super(game, "Vampire Bats", "Fifth Edition", "5ED");
  }
}

module.exports = VampireBats;
