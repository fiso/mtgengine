"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireLaceratorBase = require("../setDDK/VampireLacerator.js");

class VampireLacerator extends VampireLaceratorBase {
  constructor(game) {
    super(game, "Vampire Lacerator", "Zendikar", "ZEN");
  }
}

module.exports = VampireLacerator;
