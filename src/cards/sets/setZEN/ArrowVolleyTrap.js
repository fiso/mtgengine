"use strict";
const Constants = require ("../../../Constants");
const ArrowVolleyTrapBase = require("../setDDN/ArrowVolleyTrap");

class ArrowVolleyTrap extends ArrowVolleyTrapBase {
  constructor (game) {
    super(game, "Arrow Volley Trap", "Zendikar", "ZEN");
  }
}

module.exports = ArrowVolleyTrap;
