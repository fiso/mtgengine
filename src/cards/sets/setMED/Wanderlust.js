"use strict";
const Constants = require ("../../../Constants");
const WanderlustBase = require("../setCED/Wanderlust");

class Wanderlust extends WanderlustBase {
  constructor (game) {
    super(game, "Wanderlust", "Masters Edition", "MED");
  }
}

module.exports = Wanderlust;
