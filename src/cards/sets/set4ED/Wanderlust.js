"use strict";
const Constants = require ("../../../Constants");
const WanderlustBase = require("../setCED/Wanderlust");

class Wanderlust extends WanderlustBase {
  constructor (game) {
    super(game, "Wanderlust", "Fourth Edition", "4ED");
  }
}

module.exports = Wanderlust;
