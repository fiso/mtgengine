"use strict";
const Constants = require ("../../../Constants");
const WoollyThoctarBase = require("../setMM3/WoollyThoctar");

class WoollyThoctar extends WoollyThoctarBase {
  constructor (game) {
    super(game, "Woolly Thoctar", "Wizards Play Network 2008", "PWPN");
  }
}

module.exports = WoollyThoctar;
