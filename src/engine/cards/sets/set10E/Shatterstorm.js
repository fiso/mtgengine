"use strict";
const Constants = require ("../../../Constants");
const ShatterstormBase = require("../setMP2/Shatterstorm");

class Shatterstorm extends ShatterstormBase {
  constructor (game) {
    super(game, "Shatterstorm", "Tenth Edition", "10E");
  }
}

module.exports = Shatterstorm;
