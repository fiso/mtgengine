"use strict";
const Constants = require ("../../../Constants");
const AetherFigmentBase = require("../setDDM/AetherFigment");

class AetherFigment extends AetherFigmentBase {
  constructor(game) {
    super(game, "Æther Figment", "Zendikar", "ZEN");
  }
}

module.exports = AetherFigment;
