"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArrowVolleyTrapBase = require("../setDDN/ArrowVolleyTrap.js");

class ArrowVolleyTrap extends ArrowVolleyTrapBase {
  constructor(game) {
    super(game, "Arrow Volley Trap", "Zendikar", "ZEN");
  }
}

module.exports = ArrowVolleyTrap;
