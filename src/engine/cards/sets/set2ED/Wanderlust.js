"use strict";
const Constants = require ("../../../Constants");
const WanderlustBase = require("../setMED/Wanderlust");

class Wanderlust extends WanderlustBase {
  constructor (game) {
    super(game, "Wanderlust", "Unlimited Edition", "2ED");
  }
}

module.exports = Wanderlust;
