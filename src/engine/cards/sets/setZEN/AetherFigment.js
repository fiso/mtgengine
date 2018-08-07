"use strict";
const Constants = require ("../../../Constants");
const AetherFigmentBase = require("../setDDM/AetherFigment");

class AetherFigment extends AetherFigmentBase {
  constructor (game) {
    super(game, "Aether Figment", "Zendikar", "ZEN");
  }
}

module.exports = AetherFigment;
