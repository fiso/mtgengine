"use strict";
const Constants = require ("../../../Constants");
const ThornThrashViashinoBase = require("../setPCA/ThornThrashViashino");

class ThornThrashViashino extends ThornThrashViashinoBase {
  constructor (game) {
    super(game, "Thorn-Thrash Viashino", "Planechase 2012", "PC2");
  }
}

module.exports = ThornThrashViashino;
