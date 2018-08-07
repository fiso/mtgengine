"use strict";
const Constants = require ("../../../Constants");
const ManaPrismBase = require("../setVMA/ManaPrism");

class ManaPrism extends ManaPrismBase {
  constructor (game) {
    super(game, "Mana Prism", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ManaPrism;
