"use strict";
const Constants = require ("../../../Constants");
const ThornThrashViashinoBase = require("../setPC2/ThornThrashViashino");

class ThornThrashViashino extends ThornThrashViashinoBase {
  constructor (game) {
    super(game, "Thorn-Thrash Viashino", "Shards of Alara", "ALA");
  }
}

module.exports = ThornThrashViashino;
