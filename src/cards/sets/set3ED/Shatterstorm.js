"use strict";
const Constants = require ("../../../Constants");
const ShatterstormBase = require("../setATQ/Shatterstorm");

class Shatterstorm extends ShatterstormBase {
  constructor (game) {
    super(game, "Shatterstorm", "Revised Edition", "3ED");
  }
}

module.exports = Shatterstorm;
