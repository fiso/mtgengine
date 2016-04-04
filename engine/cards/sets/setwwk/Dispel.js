"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DispelBase = require("../setBFZ/Dispel.js");

class Dispel extends DispelBase {
  constructor(game) {
    super(game, "Dispel", "Worldwake", "WWK");
  }
}

module.exports = Dispel;
