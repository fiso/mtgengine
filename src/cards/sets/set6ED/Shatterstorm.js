"use strict";
const Constants = require ("../../../Constants");
const ShatterstormBase = require("../setATQ/Shatterstorm");

class Shatterstorm extends ShatterstormBase {
  constructor (game) {
    super(game, "Shatterstorm", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Shatterstorm;
