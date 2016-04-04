"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LithophageBase = require("../setDDI/Lithophage.js");

class Lithophage extends LithophageBase {
  constructor(game) {
    super(game, "Lithophage", "Mercadian Masques", "MMQ");
  }
}

module.exports = Lithophage;
