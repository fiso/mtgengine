"use strict";
const Constants = require ("../../../Constants");
const OhranViperBase = require("../setC15/OhranViper");

class OhranViper extends OhranViperBase {
  constructor (game) {
    super(game, "Ohran Viper", "Coldsnap", "CSP");
  }
}

module.exports = OhranViper;
